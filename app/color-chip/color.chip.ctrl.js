define(function () {
    "use strict";
    return ["$rootScope", "ColorFormat", function ($rootScope, ColorFormat) {
        "ngInject";
        var $ctrl = this;

        function selectColor(hex) {
            $rootScope.$emit('color:select', hex);
        }

        function onInit() {
            // $ctrl.colorCode = $ctrl.color.hex;
        }

        function colorValue() {
            return ColorFormat.getColor($ctrl.color.hex)
        }

        $ctrl.$onInit = onInit;
        $ctrl.selectColor = selectColor;
        $ctrl.colorValue =  colorValue;
    }];
});