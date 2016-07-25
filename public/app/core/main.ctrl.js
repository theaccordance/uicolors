define([], function () {

    return ['PALETTES', function(PALETTES) {
        var vm = this;

        function setBackground(hex) {
            window.console.log('setting background', hex);
            vm.background = hex;
        }

        vm.Palettes = PALETTES;
        vm.background = '#ecf0f1';
        vm.setBackground = setBackground;
    }];

});