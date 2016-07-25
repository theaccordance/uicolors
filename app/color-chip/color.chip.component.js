define([
    'app/color-chip/color.chip.ctrl'
], function (colorChipCtrl) {
    return {
        bindings: {
            color: '<',
            onColorSelect: '&'
        },
        controller: colorChipCtrl,
        templateUrl: 'app/color-chip/color-chip.html'
    };
});