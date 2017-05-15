define(function () {

    function routesConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/flat-ui');
    }

    return ['$urlRouterProvider', routesConfig];
});