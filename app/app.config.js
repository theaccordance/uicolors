define(function () {
    "use strict";
    return ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        "ngInject";
        $stateProvider
            .state({
                name: 'palette',
                url: '/:palette',
                component: 'palette',
                resolve: {
                    palette: ["Palettes", "$stateParams", function (Palettes, $stateParams) {
                        "ngInject";
                        return Palettes.select($stateParams.palette);
                    }]
                }
            });
        $urlRouterProvider.when('', '/flat-ui');
    }];
});