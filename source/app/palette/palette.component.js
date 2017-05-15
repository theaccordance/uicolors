define(['./palette.ctrl'], function (paletteCtrl) {
    "use strict";

    return {
        bindings: {
            palette: '<'
        },
        controller: paletteCtrl,
        templateUrl: 'app/palette/palette.html'
    };
});