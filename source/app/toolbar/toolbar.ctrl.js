define(function () {
    "use strict";
    return function ($stateParams, ColorFormat, Palettes) {
        "ngInject";
        var $ctrl = this;

        function onInit() {
            $ctrl.format = ColorFormat.getFormat();
            $ctrl.formats = ColorFormat.getFormats();
            $ctrl.palettes = Palettes.list();
            console.log($ctrl.palettes);
        }

        function active(palette) {
            return $stateParams.palette === palette;
        }

        function setFormat() {
            return ColorFormat.setFormat($ctrl.format);
        }

        $ctrl.setFormat = setFormat;
        $ctrl.active = active;
        $ctrl.$onInit = onInit;
    }
});