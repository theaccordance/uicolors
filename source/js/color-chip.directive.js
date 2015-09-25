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

            scope.isLarge = true;

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
                scope.isLarge = !scope.isLarge;
            });

            scope.setWidth = function (size) {
                return 'col-md-' + size;
            };
    }
  }
}]);
