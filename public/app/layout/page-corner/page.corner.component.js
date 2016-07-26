define([
    'app/layout/page-corner/page.corner.ctrl'
], function (pageCornerCtrl) {
    return {
        bindings: {
            background: '<?',
            corner: '<?'
        },
        controller: pageCornerCtrl,
        templateUrl: 'app/page-corner/page-corner.html'
    };
});