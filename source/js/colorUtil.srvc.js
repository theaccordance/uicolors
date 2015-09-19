app.service('colorUtil', [function () {

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

  return {
    toHexHash: toHexHash,
    toHexNoHash: toHexNoHash,
    toRGB: toRGB,
    toRGBA: toRGBA
  };
}]);
