define([
    './color.chip.ctrl'
], function (colorChipCtrl) {
    return {
        bindings: {
            color: '<'
        },
        controller: colorChipCtrl,
        templateUrl: 'app/color-chip/color.chip.html'
    };
});