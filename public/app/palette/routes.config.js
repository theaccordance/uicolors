define([
    'angular',
    'app/palette/state.ctrl'
], function (angular, stateCtrl) {

    function routesConfig($stateProvider) {
        $stateProvider
            .state({
                name: 'palette',
                url: '/:palette',
                resolve: {
                    palette: ['$stateParams', 'PALETTES', function ($stateParams, PALETTES) {
                        return {
                            "name": $stateParams.palette,
                            "colors": PALETTES[$stateParams.palette]
                        };
                    }]
                },
                template: '<palette palette="$ctrl.palette"></palette>',
                controller: stateCtrl,
                controllerAs: '$ctrl'
            });
    }

    return ['$stateProvider', routesConfig];
});