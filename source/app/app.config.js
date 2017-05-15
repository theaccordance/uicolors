define(function () {
    "use strict";
    return function ($stateProvider, $urlRouterProvider) {
        "ngInject";
        $stateProvider
            .state({
                name: 'palette',
                url: '/:palette',
                component: 'palette',
                resolve: {
                    palette: function (Palettes, $stateParams) {
                        "ngInject";
                        return Palettes.select($stateParams.palette);
                    }
                }
            });
        $urlRouterProvider.when('', '/flat-ui');
    };
});