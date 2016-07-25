define([
    'app/palette/palette.ctrl'
], function (paletteCtrl) {
    return {
        bindings: {
            palette: '<',
            onColorSelect: '&'
        },
        controller: paletteCtrl,
        templateUrl: 'app/palette/palette.html'
    };
});