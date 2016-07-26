define([
    'app/palette/color-chip/color.chip.ctrl'
], function (colorChipCtrl) {
    return {
        bindings: {
            color: '<',
            onColorSelect: '&'
        },
        controller: colorChipCtrl,
        templateUrl: 'app/palette/color-chip/color-chip.html'
    };
});