define(['../../lib/clipboard.min'], function(Clipboard) {
    "use strict";

    return function (ngNotify) {
        "ngInject";
        var $ctrl = this,
            clipboard;

        function onInit() {
            if ($ctrl.palette.error) {
                window.console.log('error', $ctrl.palette.error);
            }
            clipboard = new Clipboard('color-chip > .panel');

            clipboard.on('success', function (e) {
                window.console.log('copy');
                ngNotify.set('Color copied to clipboard!');
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                ngNotify.set(['Press ', key, '-C to Copy'].join(''));
            });
        }

        function onDestroy() {
            clipboard.destroy();
        }

        $ctrl.$onInit = onInit;
        $ctrl.onDestroy = onDestroy;
    };
});