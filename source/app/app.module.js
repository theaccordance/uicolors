define([
    'angular',
    './app.config',
    './palettes.const',
    './color-chip/color.chip.component',
    './github/github.component',
    './palette/palette.component',
    './palette-chip/palette.chip.component',
    './palettes/palettes.component',
    './toolbar/toolbar.component',
    './util/contrast',
    './util/color.format',
    './util/luma',
    './util/paint.wall',
    './util/palettes',
    '../lib/angular-ui-router.min',
    '../lib/angular-animate.min',
    '../lib/ng-notify.min'
], function(
    angular,
    appConfig,
    PALETTES,
    colorChip,
    github,
    palette,
    paletteChip,
    palettesComponent,
    toolbar,
    contrast,
    colorFormat,
    luma,
    paintWall,
    palettes
) {
    "use strict";
    return angular.module('jm.color', ['ui.router', 'ngAnimate', 'ngNotify'])
        .config(appConfig)
        .constant('PALETTES', PALETTES)
        .component('colorChip', colorChip)
        .component('github', github)
        .component('palette', palette)
        .component('paletteChip', paletteChip)
        .component('palettes', palettesComponent)
        .component('toolbar', toolbar)
        .directive('contrast', contrast)
        .factory('ColorFormat', colorFormat)
        .factory('Luma', luma)
        .directive('paintWall', paintWall)
        .factory('Palettes', palettes);
});