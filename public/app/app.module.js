define([
    'angular',
    'app/palette/palette.module',
    'app/layout/page-corner/page.corner.component',
    'app/core/main.ctrl'
], function(angular,
            PaletteModule,
            pageCornerCmpnt,
            mainCtrl) {
    return angular.module('jm.colorPalettes', ['palette'])
        .component('pageCorner', pageCornerCmpnt)
        .controller('mainCtrl', mainCtrl);
});