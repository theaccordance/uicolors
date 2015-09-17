var app = angular.module('skittles', ['angular-clipboard']);

app.controller('paletteCtrl', ['$scope', function ($scope) {
  $scope.mock = [
    {name: 'turquoise', hex: '#1abc9c'},
    {name: 'green sea', hex: '#16a085'},
    {name: 'emerald', hex: '#2ecc71'},
    {name: 'nephritis', hex: '#27ae60'}
  ];

  $scope.success = function (color) {
    console.log('Color', color, 'copied.');
  };
}]);
