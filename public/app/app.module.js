define([
    'angular',
    'app/layout/layout.module',
    'app/palette/palette.module',
    'app/core/main.ctrl'
], function(angular,
            LayoutModule,
            PaletteModule,
            mainCtrl) {
    return angular.module('color', ['color.layout', 'color.palette'])
        .controller('mainCtrl', mainCtrl);
});