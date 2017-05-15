define(function () {
    "use strict";

    return ["PALETTES", function(PALETTES) {
        "ngInject";
        var notFound = {
                error: 'That Palette doesnt exist... yet',
                colors: []
            };

        function select(palette) {
            return PALETTES[palette] || notFound;
        }

        function list() {
            var list = [];
            for (var palette in PALETTES) {
                list.push({name: PALETTES[palette].name, slug: PALETTES[palette].slug});
            }
            return list;
        }

        return {
            select: select,
            list: list
        }
    }]
});