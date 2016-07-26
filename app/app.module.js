define([
    'angular',
    'app/palette/palette.module',
    'app/layout/page-corner/page.corner.component',
    'app/core/main.ctrl'
], function(angular,
            PaletteModule,
            pageCornerCmpnt,
            mainCtrl) {
    return angular.module('jmColor', ['jmColor.Palette'])
        .component('pageCorner', pageCornerCmpnt)
        .controller('mainCtrl', mainCtrl);
});