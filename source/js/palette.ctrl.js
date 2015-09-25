app.controller('paletteCtrl', ['$scope', 'ngNotify', 'paletteManager', function ($scope, ngNotify, paletteManager) {
    $scope.mock = paletteManager.load('flat');

    $scope.$on('palette:load', function (event, palette) {
        $scope.mock = paletteManager.load(palette);
        ngNotify.set('Palette switched to ' + palette, {type: 'warn'});
    });
}]);
