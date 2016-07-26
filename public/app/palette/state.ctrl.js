define([], function () {

    return ['palette', '$stateParams', function(palette) {
        var vm = this;

        function setBackground(hex) {
            window.console.log('setting background', hex);
            vm.background = hex;
        }

        function onInit() {
            vm.background = '#ecf0f1';
            vm.palette = palette;
        }

        vm.$onInit = onInit;
        vm.setBackground = setBackground;
    }];

});