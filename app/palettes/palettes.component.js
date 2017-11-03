define(['./palettes.ctrl'], function (ctrl) {
    return {
        bindings: {
            palettes: '<'
        },
        controller: ctrl,
        templateUrl: 'app/palettes/palettes.html'
    };
});