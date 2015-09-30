app.directive('palette', ['ngNotify',function (ngNotify) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/palette.html',
        scope: {
            model: '=palette'
        },
        link: function (scope, element) {
            var clipboard = new Clipboard('.color-chip'),
                key = (/Mac/i.test(navigator.userAgent)) ? '⌘' : 'Ctrl';

            clipboard.on('success', function (e) {
                ngNotify.set('Color copied to clipboard!');
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                console.log(e);
                ngNotify.set(['Press ', key, '-C to Copy'].join(''));
            });
        }
    };
}]);