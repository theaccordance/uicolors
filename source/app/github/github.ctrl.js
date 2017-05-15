define(function () {

    function pageCornerCtrl($rootScope) {
        "ngInject";
        var $ctrl = this,
            listener;
        $ctrl.repoUrl = 'https://github.com/theaccordance/color-palettes';

        function getLuma(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
                r = parseInt(result[1], 16),
                g = parseInt(result[2], 16),
                b = parseInt(result[3], 16);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        function onColorSelect(event, data) {
            $ctrl.octocat = data;
            $ctrl.corner = getLuma($ctrl.octocat) < 75 ? '#FFF' : '#000';
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