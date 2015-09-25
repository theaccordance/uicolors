app.directive('skHeader', ['$document', '$rootScope', 'colorProcessor', function ($document, $rootScope, colorProcessor) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/header.html',
        link: function (scope) {
            scope.isRowIcon = true;
            scope.showOptions = false;
            scope.outputFormat = colorProcessor.getFormat();

            scope.formats = colorProcessor.getFormats();

            scope.toggleLayout = function () {
                $rootScope.$broadcast('layout:toggle');
                scope.isRowIcon = !scope.isRowIcon;
            };

            scope.setFormat = function () {
                colorProcessor.setFormat(scope.outputFormat);
            };

            scope.toggleOptions = function () {
                scope.showOptions = !scope.showOptions;
            }
        }
    };
}]);