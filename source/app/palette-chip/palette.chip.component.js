define(['./palette.chip.ctrl'], function (ctrl) {
    return {
        bindings: {
            palette: '<'
        },
        controller: ctrl,
        templateUrl: 'app/palette-chip/palette.chip.html'
    };
});