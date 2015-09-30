var app = angular.module('skittles', ['ngNotify']);

app.directive('color', ['$document', '$rootScope', 'colorProcessor', 'ngNotify', function ($document, $rootScope, colorProcessor, ngNotify) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/color.html',
        scope: {
          color: '=color'
        },
        link: function (scope, element) {

            function getLuma(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
                    r = parseInt(result[1], 16),
                    g = parseInt(result[2], 16),
                    b = parseInt(result[3], 16);
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            }

            scope.isLarge = true;

            element.css({
                backgroundColor: scope.color.hex,
                color: (getLuma(scope.color.hex) < 75) ? '#FFF' : '#000'
            });

            scope.$on('layout:toggle', function (event, data) {
                scope.isLarge = !scope.isLarge;
            });

            scope.setWidth = function (size) {
                return 'col-md-' + size;
            };

            scope.showValue = function (hex) {
                return colorProcessor.getColor(hex);
            };
    }
  }
}]);

app.directive('skHeader', ['$document', '$rootScope', 'colorProcessor', function ($document, $rootScope, colorProcessor) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/header.html',
        link: function (scope) {
            scope.isLarge = true;
            scope.showOptions = false;
            scope.outputFormat = colorProcessor.getFormat();

            scope.formats = colorProcessor.getFormats();

            scope.toggleLayout = function () {
                $rootScope.$broadcast('layout:toggle');
                scope.isLarge = !scope.isLarge;
            };

            scope.setFormat = function () {
                colorProcessor.setFormat(scope.outputFormat);
            };

            scope.toggleOptions = function () {
                scope.showOptions = !scope.showOptions;
            };

            scope.loadPalette = function (palette) {
                $rootScope.$broadcast('palette:load', palette);
                scope.showOptions = !scope.showOptions;
                scope.isLarge = true;
            };
        }
    };
}]);
app.directive('palette', ['ngNotify',function (ngNotify) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/palette.html',
        scope: {
            model: '=palette'
        },
        link: function (scope, element) {
            var clipboard = new Clipboard('.color-chip');

            clipboard.on('success', function (e) {
                ngNotify.set('Color copied to clipboard!');
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                console.log(e);
                ngNotify.set('Press ⌘-C to Copy');
            });
        }
    };
}]);
app.service('paletteManager', [function () {

    var palettes = {
        flat: {
            large: 6,
            small: 3,
            palette: [
                {name: 'turquoise', hex: '#1abc9c'},
                {name: 'green sea', hex: '#16a085'},
                {name: 'emerald', hex: '#2ecc71'},
                {name: 'nephritis', hex: '#27ae60'},
                {name: 'peter river', hex: '#3498db'},
                {name: 'belize hole', hex: '#2980b9'},
                {name: 'amethyst', hex: '#9b59b6'},
                {name: 'wisteria', hex: '#8e44ad'},
                {name: 'wet asphalt', hex: '#34495e'},
                {name: 'midnight blue', hex: '#2c3e50'},
                {name: 'sunflower', hex: '#f1c40f'},
                {name: 'orange', hex: '#f39c12'},
                {name: 'carrot', hex: '#e67e22'},
                {name: 'pumpkin', hex: '#d35400'},
                {name: 'alizarin', hex: '#e74c3c'},
                {name: 'pomegranate', hex: '#c0392b'},
                {name: 'clouds', hex: '#ecf0f1'},
                {name: 'silver', hex: '#bdc3c7'},
                {name: 'concrete', hex: '#95a5a6'},
                {name: 'asbestos', hex: '#7f8c8d'}
            ]
        },
        material: {
            large: 6,
            small: 3,
            palette: [
                {name: 'Red', hex: '#F44336'},
                {name: 'Pink', hex: '#E91E63'},
                {name: 'Purple', hex: '#9C27B0'},
                {name: 'Deep Purple', hex: '#673AB7'},
                {name: 'Indigo', hex: '#3F51B5'},
                {name: 'Blue', hex: '#2196F3'},
                {name: 'Light Blue', hex: '#03A9F4'},
                {name: 'Cyan', hex: '#00BCD4'},
                {name: 'Green', hex: '#4CAF50'},
                {name: 'Light Green', hex: '#8BC34A'},
                {name: 'Lime', hex: '#CDDC39'},
                {name: 'Yellow', hex: '#FFEB3B'},
                {name: 'Amber', hex: '#FFC107'},
                {name: 'Orange', hex: '#FF9800'},
                {name: 'Deep Orange', hex: '#FF5722'},
                {name: 'Brown', hex: '#795548'},
                {name: 'Grey', hex: '#9E9E9E'},
                {name: 'Blue Grey', hex: '#607D8B'},
                {name: 'Black', hex: '#000000'},
                {name: 'White', hex: '#FFFFFF'}
            ]
        },
        metro: {
            large: 6,
            small: 4,
            palette: [
                {name: 'Light Green', hex: '#99b433'},
                {name: 'Green', hex: '#00a300'},
                {name: 'Dark Green', hex: '#1e7145'},
                {name: 'Magenta', hex: '#ff0097'},
                {name: 'Light Purple', hex: '#9f00a7'},
                {name: 'Purple', hex: '#7e3878'},
                {name: 'Dark Purple', hex: '#603cba'},
                {name: 'Darken', hex: '#1d1d1d'},
                {name: 'Teal', hex: '#00aba9'},
                {name: 'Light Blue', hex: '#eff4ff'},
                {name: 'Blue', hex: '#2d89ef'},
                {name: 'Dark Blue', hex: '#2b5797'},
                {name: 'Yellow', hex: '#ffc40d'},
                {name: 'Orange', hex: '#e3a21a'},
                {name: 'Dark Orange', hex: '#da532c'},
                {name: 'Red', hex: '#ee1111'},
                {name: 'Dark Red', hex: '#b91d47'},
                {name: 'White', hex: '#FFFFFF'}
            ]
        }
    };

    function loadPalette(selection) {
        return palettes[selection];
    }

    return {
        load: loadPalette
    };
}]);
app.service('colorProcessor', ['ngNotify', function (ngNotify) {

    var processHex = {},
        formats = [
            {'name': 'Hexadecimal w/ Hashtag' , 'label': 'HEX - #1234EF', value: 'toHexHash'},
            {'name': 'Hexadecimal' , 'label': 'HEX - 1234EF', value: 'toHexNoHash'},
            {'name': 'RGB' , 'label': 'RGB - rgb(255, 255, 255)', value: 'toRGB'},
            {'name': 'RGBA' , 'label': 'RGBA - rgba(255, 255, 255, 1.0)', value: 'toRGBA'}
        ],
        format = formats[0];

    function toHexHash (hex) {
        return hex;
    }

    function toHexNoHash (hex) {
        return hex.slice(1);
    }

    function toRGB (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
        r = parseInt(result[1], 16),
        g = parseInt(result[2], 16),
        b = parseInt(result[3], 16);
        return ['rgb(',r, ',', g, ',', b,')'].join('');
    }

    function toRGBA (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
        r = parseInt(result[1], 16),
        g = parseInt(result[2], 16),
        b = parseInt(result[3], 16);
        return ['rgba(',r, ',', g, ',', b,', 1.0)'].join('');
    }

    processHex = {
        toHexHash: toHexHash,
        toHexNoHash: toHexNoHash,
        toRGB: toRGB,
        toRGBA: toRGBA
    };

    function getColor (hex) {
        return processHex[format.value](hex);
    }

    function getFormats() {
        return formats;
    }

    function getFormat() {
        return format;
    }

    function setFormat(data) {
        format = data;
        ngNotify.set('Color Values set to ' + data.name, {type: 'grimace'});
    }

    return {
        getColor: getColor,
        getFormat: getFormat,
        getFormats: getFormats,
        setFormat: setFormat
    };
}]);

app.controller('mainCtrl', ['$scope', 'ngNotify', 'paletteManager', function ($scope, ngNotify, paletteManager) {
    $scope.model = paletteManager.load('flat');

    $scope.$on('palette:load', function (event, palette) {
        $scope.model = paletteManager.load(palette);
        ngNotify.set('Palette switched to ' + palette, {type: 'warn'});
    });
}]);
