require.config({
    paths: {
        'angular': 'lib/angular.min'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'lib/angular-ui-router.min': {deps: ['angular']},
        'lib/angular-animate.min': {deps: ['angular']},
        'lib/ng-notify.min': {deps: ['angular']}
    },
    baseUrl: '.',
    priority : [
        'angular'
    ]
});

require([
    'angular',
    'app/app.module'
], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jm.color']);
    });
});