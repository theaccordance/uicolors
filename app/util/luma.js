define(function () {
    "use strict";

    return function () {
        "ngInject";
        function relative(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
                r = parseInt(result[1], 16),
                g = parseInt(result[2], 16),
                b = parseInt(result[3], 16);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        return {
            relative: relative
        };
    }
});