define(function () {
    "use strict";
    return function ($stateProvider, $urlRouterProvider) {
        "ngInject";
        $stateProvider
            .state({
                name: 'palettes',
                url: '/palettes',
                component: 'palettes',
                resolve: {
                    palettes: function (Palettes) {
                        "ngInject";
                        return Palettes.list();
                    }
                }
            })
            .state({
                name: 'palette',
                url: '/palettes/:palette',
                component: 'palette',
                resolve: {
                    palette: function (Palettes, $stateParams) {
                        "ngInject";
                        return Palettes.select($stateParams.palette);
                    }
                }
            });
        $urlRouterProvider.when('', 'palettes/flat-ui');
    };
});