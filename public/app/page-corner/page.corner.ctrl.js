define([], function () {

    function pageCornerCtrl() {
        var vm = this;
        vm.repoUrl = 'https://github.com/theaccordance/color-palettes';

        function getLuma(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
                r = parseInt(result[1], 16),
                g = parseInt(result[2], 16),
                b = parseInt(result[3], 16);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        function onInit() {
            if (!vm.background) {
                window.console.log('No Background provided, setting to default...');
                vm.background = '#ffffff';
            }
            if (!vm.corner) {
                window.console.log('No Corner color provided, setting to default...');
                vm.corner = (getLuma(vm.background) < 75) ? '#FFF' : '#000';
            }
            vm.fill = vm.corner;
        }

        function onChanges(changeObj) {
            if (vm.corner !== vm.fill) {
                vm.fill = vm.corner;
            }

            if (changeObj.background) {
                if (changeObj.background.currentValue === vm.corner) {
                    vm.fill = (getLuma(vm.background) < 75) ? '#FFF' : '#000';
                }
            }
        }

        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
    }

    return pageCornerCtrl;
});