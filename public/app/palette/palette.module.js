define([
    'angular',
    'app/core/core.module',
    'app/palette/palettes.constant',
    'app/palette/routes.config',
    'app/palette/palette.component',
    'app/palette/color-chip/color.chip.component',
    'app/palette/palette-select/palette.select.component'

], function(angular,
            CoreModule,
            PalettesConst,
            paletteRoutes,
            paletteCmpnt,
            colorChipCmpnt,
            paletteSelectCmpnt) {
    return angular.module('color.palette', ['color.core'])
        .config(paletteRoutes)
        .constant('PALETTES', PalettesConst)
        .component('palette', paletteCmpnt)
        .component('colorChip', colorChipCmpnt)
        .component('paletteSelect', paletteSelectCmpnt);
});