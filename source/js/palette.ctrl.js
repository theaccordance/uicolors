app.controller('paletteCtrl', ['$scope', 'ngNotify', 'paletteManager', function ($scope, ngNotify, paletteManager) {
    $scope.model = paletteManager.load('flat');

    $scope.$on('palette:load', function (event, palette) {
        $scope.model = paletteManager.load(palette);
        ngNotify.set('Palette switched to ' + palette, {type: 'warn'});
    });
}]);
