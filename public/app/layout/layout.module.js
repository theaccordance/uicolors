define([
    'angular',
    'app/layout/page-corner/page.corner.component'

], function(angular,
            pageCornerCmpnt) {
    return angular.module('color.layout', [])
        .component('pageCorner', pageCornerCmpnt);
});