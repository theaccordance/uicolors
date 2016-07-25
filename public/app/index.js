require.config({
    paths: {
        'angular': 'js/angular.min'
    },
    shim: {
        'angular' : {'exports' : 'angular'}
    },
    baseUrl: '.',
    priority : [
        'angular'
    ]
});

require([
    'angular',
    'app/core/app.module'
], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jm.colorPalettes']);
    });
});