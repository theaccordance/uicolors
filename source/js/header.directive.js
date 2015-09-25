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
            };
        }
    };
}]);