var app = angular.module('skittles', ['ngNotify']);

app.directive('colorChip', ['$document', '$rootScope', 'colorProcessor', 'ngNotify', function ($document, $rootScope, colorProcessor, ngNotify) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/color-chip.html',
        scope: {
          color: '=color'
        },
        link: function (scope, element) {
            function createNode(text) {
                var node = $document[0].createElement('textarea');
                node.style.position = 'absolute';
                node.style.left = '-10000px';
                node.textContent = text;
                return node;
            }

            function copyNode(node) {
                // Set inline style to override css styles
                $document[0].body.style.webkitUserSelect = 'initial';

                var selection = $document[0].getSelection();
                selection.removeAllRanges();
                node.select();

                $document[0].execCommand('copy');
                selection.removeAllRanges();

                // Reset inline style
                $document[0].body.style.webkitUserSelect = '';
            }

            function copyText(text) {
                var node = createNode(text);
                $document[0].body.appendChild(node);
                copyNode(node);
                $document[0].body.removeChild(node);
            }

            function getLuma(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
                    r = parseInt(result[1], 16),
                    g = parseInt(result[2], 16),
                    b = parseInt(result[3], 16);
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            }

            scope.isRow = true;

            element.css({
                backgroundColor: scope.color.hex,
                color: (getLuma(scope.color.hex) < 75) ? '#FFF' : '#000'
            });

            element.on('click', function () {
                var color = colorProcessor.getColor(scope.color.hex);
                copyText(color);
                // $rootScope.$broadcast('notify:show', {hex: scope.color.hex});
                ngNotify.set('Color Copied!');
            });

            scope.$on('layout:toggle', function (event, data) {
                scope.isRow = !scope.isRow;
            });
    }
  }
}]);

app.directive('skHeader', ['$document', '$rootScope', 'colorProcessor', function ($document, $rootScope, colorProcessor) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/header.html',
        link: function (scope) {
            scope.isRowIcon = true;
            scope.outputFormat = colorProcessor.getFormat();

            scope.formats = colorProcessor.getFormats();

            scope.toggleLayout = function () {
                $rootScope.$broadcast('layout:toggle');
                scope.isRowIcon = !scope.isRowIcon;
            };

            scope.setFormat = function () {
                colorProcessor.setFormat(scope.outputFormat);
            };
        }
    };
}]);
app.directive('flashToaster', ['$timeout', function ($timeout) {
    return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/notify.html',
    scope: {},
    link: function (scope, element) {
        var boxHeight = 160,
        height = (boxHeight * 60) / window.innerHeight,
        yCenter = (60 / 2) - (height / 2),
        rectStartPos = {
            y: yCenter * 0.75,
            height: height,
            opacity: 0
        };

        scope.viewBox = '0 0 80 60';

        scope.rect = rectStartPos;

        scope.$on('notify:show', function (event, data) {
          var toPath = 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z',
              fromPath = 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
              toaster = Snap('#toaster > path');
              toaster.attr({fill: data.hex});
          element.addClass('show');

          toaster.animate({d: toPath}, 250, mina.elastic(), function () {
              var toast = Snap('#toast');
              toast.animate({
                  y: yCenter,
                  opacity: 1
              }, 250);
              $timeout(function () {
                  toast.animate(rectStartPos, 100, mina.backout(), function () {
                      toaster.animate({opacity: 0}, 250, mina.backout(), function () {
                          element.removeClass('show');
                          toaster.attr({d: fromPath, opacity: 1});
                      });
                  });
              }, 2000);
          });
        });
    }
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

app.controller('paletteCtrl', ['$scope', '$rootScope', 'colorProcessor', function ($scope, $rootScope, colorProcessor) {

    $scope.mock = [
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
    ];


}]);
