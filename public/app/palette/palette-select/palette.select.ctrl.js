define([], function () {

    function paletteSelectCtrl(PALETTES, $state, $stateParams) {
        var vm = this;

        function selectPalette(palette) {
            vm.activePalette = palette;
            $state.go('palette', {palette: palette});
            vm.open = false;
        }

        function onInit() {
            vm.palettes = Object.keys(PALETTES);
            vm.activePalette = $stateParams.palette;
            window.console.log('active', vm.activePalette);
        }

        vm.$onInit = onInit;
        vm.selectPalette = selectPalette;

    }

    return ['PALETTES', '$state', '$stateParams', paletteSelectCtrl];
});