define([], function () {

    function paletteCtrl() {
        var vm = this;

        function selectColor(hex) {
            window.console.log('palette selection', hex);
            vm.onColorSelect({$event: hex});
        }
        vm.selectColor = selectColor;
    }

    return paletteCtrl;
});