define(function () {
    "use strict";
    return function ($interval) {
        "ngInject";
        var $ctrl = this,
            count = 0;

        function switchColor(count) {
            var color = $ctrl.palette.colors[count % $ctrl.length];
            return color.hex;
        }

        function onInit() {
            $ctrl.length = $ctrl.palette.colors.length;
            $ctrl.color = switchColor(count);
            $interval(function () {
                $ctrl.color = switchColor(count++);
            }, 2000);
        }

        $ctrl.$onInit = onInit;
    };
});