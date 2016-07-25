define([
    'angular',
    'app/core/palettes.constant',
    'app/palette/palette.component',
    'app/color-chip/color.chip.component',
    'app/page-corner/page.corner.component',
    'app/core/main.ctrl'

], function(angular,
            PalettesConst,
            paletteCmpnt,
            colorChipCmpnt,
            pageCornerCmpnt,
            mainCtrl) {
    return angular.module('jm.colorPalettes', [])
        .constant('PALETTES', PalettesConst)
        .component('palette', paletteCmpnt)
        .component('colorChip', colorChipCmpnt)
        .component('pageCorner', pageCornerCmpnt)
        .controller('mainCtrl', mainCtrl);
});