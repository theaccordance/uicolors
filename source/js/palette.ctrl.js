app.controller('paletteCtrl', ['$scope', function ($scope) {

  var colorOutput = {};

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

  colorOutput = {
    toHexHash: toHexHash,
    toHexNoHash: toHexNoHash,
    toRGB: toRGB,
    toRGBA: toRGBA
  };

  $scope.formats = [
    {'label': 'HEX - #1234EF', value: 'toHexHash'},
    {'label': 'HEX - 1234EF', value: 'toHexNoHash'},
    {'label': 'RGB - rgb(255, 255, 255)', value: 'toRGB'},
    {'label': 'RGBA - rgba(255, 255, 255, 1.0)', value: 'toRGBA'}
  ];

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

  $scope.init = function () {
    $scope.outputFormat = $scope.formats[0].value;
  };
}]);
