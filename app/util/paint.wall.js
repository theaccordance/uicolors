define(function () {
    "use strict";
    return ["$rootScope", function ($rootScope) {
        "ngInject";
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                return $rootScope.$on('color:select', function (event, data) {
                    return $element.css('background-color', data);
                });
            }
        };
    }];

});