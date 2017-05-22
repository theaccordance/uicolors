define(function () {
    "use strict";
    return function ($interval) {
        "ngInject";
        var $ctrl = this,
            count = 0,
            interval = Math.floor(Math.random() * 1000) + 1000;

        function switchColor(count) {
            var color = $ctrl.palette.colors[count % $ctrl.length];
            return color.hex;
        }

        function onInit() {
            console.log($ctrl.palette.name, interval);
            $ctrl.length = $ctrl.palette.colors.length;
            $ctrl.color = switchColor(count);
            $interval(function () {
                $ctrl.color = switchColor(count++);
            }, interval);
        }

        $ctrl.$onInit = onInit;
    };
});