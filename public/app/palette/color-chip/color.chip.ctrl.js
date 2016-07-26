define([], function () {

    function colorChipCtrl() {
        var vm = this;

        function selectColor(hex) {
            window.console.log('chip select', hex);
            vm.onColorSelect({$event: hex});
        }

        vm.colorCode = vm.color.hex;
        vm.selectColor = selectColor;
    }

    return colorChipCtrl;
});