define([], function () {

    function paletteCtrl() {
        var vm = this;

        function selectColor(hex) {
            vm.onColorSelect({$event: hex});
        }

        function onInit() {

        }

        vm.$onInit = onInit;
        vm.selectColor = selectColor;
    }

    return paletteCtrl;
});