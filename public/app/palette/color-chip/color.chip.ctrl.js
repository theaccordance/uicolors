define([], function () {

    function colorChipCtrl() {
        var vm = this;

        function selectColor(hex) {
            vm.onColorSelect({$event: hex});
        }

        vm.colorCode = vm.color.hex;
        vm.selectColor = selectColor;
    }

    return colorChipCtrl;
});