define([
    'angular',
    'app/core/core.module',
    'app/layout/layout.module',
    'app/palette/palette.module',
    'app/app.config'

], function(angular,
            CoreModule,
            LayoutModule,
            PaletteModule,
            appConfig) {
    return angular
        .module('color', ['color.core', 'color.layout', 'color.palette'])
        .config(appConfig);
});