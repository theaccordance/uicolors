define(function () {
    "use strict";
    return ["$rootScope", "ColorFormat", "Luma", function ($rootScope, ColorFormat, Luma) {
        "ngInject";
        var $ctrl = this;

        function selectColor(hex) {
            $rootScope.$emit('color:select', hex);
        }

        function onInit() {
            $ctrl.contrast = Luma.relative($ctrl.color.hex) < 100;
            $ctrl.label = ColorFormat.rgb($ctrl.color.hex);
        }

        function copyValue() {
            return ColorFormat.getCopyValue($ctrl.color.hex)
        }

        $ctrl.$onInit = onInit;
        $ctrl.selectColor = selectColor;
        $ctrl.copyValue =  copyValue;
    }];
});