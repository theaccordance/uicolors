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
