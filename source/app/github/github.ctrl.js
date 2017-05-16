define(function () {

    function pageCornerCtrl($rootScope, Luma) {
        "ngInject";
        var $ctrl = this,
            listener;
        $ctrl.repoUrl = 'https://github.com/theaccordance/color-palettes';

        function onColorSelect(event, data) {
            $ctrl.octocat = data;
            $ctrl.corner = Luma.relative($ctrl.octocat) < 75 ? '#FFF' : '#000';
        }

        function onInit() {
            listener = $rootScope.$on('color:select', onColorSelect);
        }

        function onDestroy() {
            listener();
        }

        $ctrl.octocat = '#ffffff';
        $ctrl.corner = '#000';
        $ctrl.$onInit = onInit;
        $ctrl.$onDestroy = onDestroy;
    }

    return pageCornerCtrl;
});