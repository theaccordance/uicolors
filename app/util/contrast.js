define(function () {
    "use strict";
    return ["$rootScope", "Luma", function ($rootScope, Luma) {
        "ngInject";
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                return $rootScope.$on('color:select', function (event, data) {
                    return $element.css('color', Luma.relative(data) < 100 ? '#FFF' : '#000');
                });
            }
        };
    }];

});