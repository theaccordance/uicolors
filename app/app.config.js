define(function () {
    "use strict";
    return ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        "ngInject";
        $stateProvider
            .state({
                name: 'palettes',
                url: '/palettes',
                component: 'palettes',
                resolve: {
                    palettes: ["Palettes", function (Palettes) {
                        "ngInject";
                        return Palettes.list();
                    }]
                }
            })
            .state({
                name: 'palette',
                url: '/palettes/:palette',
                component: 'palette',
                resolve: {
                    palette: ["Palettes", "$stateParams", function (Palettes, $stateParams) {
                        "ngInject";
                        return Palettes.select($stateParams.palette);
                    }]
                }
            });
        $urlRouterProvider.when('', 'palettes');
    }];
});