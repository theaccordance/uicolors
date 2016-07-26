define([
    'angular'
], function (angular) {

    function routesConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/flat-ui');
    }

    return ['$urlRouterProvider', routesConfig];
});