define([
    'angular',
    'app/palette/palettes.constant',
    'app/palette/palette.component',
    'app/palette/color-chip/color.chip.component'

], function(angular,
            PalettesConst,
            paletteCmpnt,
            colorChipCmpnt) {
    return angular.module('jmColor.Palette', [])
        .constant('PALETTES', PalettesConst)
        .component('palette', paletteCmpnt)
        .component('colorChip', colorChipCmpnt);
});