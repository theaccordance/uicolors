define(function () {
    "use strict";
    return function ($rootScope, ColorFormat, Luma) {
        "ngInject";
        var $ctrl = this;

        function selectColor(hex) {
            $rootScope.$emit('color:select', hex);
        }

        function onInit() {
            $ctrl.contrast = Luma.relative($ctrl.color.hex) < 100;
            console.log($ctrl.color.name, Luma.relative($ctrl.color.hex));
        }

        function colorValue() {
            return ColorFormat.getColor($ctrl.color.hex)
        }

        $ctrl.$onInit = onInit;
        $ctrl.selectColor = selectColor;
        $ctrl.colorValue =  colorValue;
    };
});