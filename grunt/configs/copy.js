module.exports = function (grunt) {
    return {
        homepage: {
            files: [
                {
                    expand: true,
                    src: [
                        'node_modules/angular/angular.js',
                        'bower_components/ng-notify/dist/ng-notify.min.js',
                        'bower_components/clipboard/dist/clipboard.min.js'
                    ],
                    dest: 'preview/js/',
                    filter: 'isFile',
                    flatten: true
                },
                {expand: true, cwd: 'bower_components/ng-notify/dist/', src: ['ng-notify.min.css'], dest: 'preview/css', filter: 'isFile'},
                {expand: true, cwd: 'node_modules/bootstrap/fonts/', src: ['*'], dest: 'preview/fonts', filter: 'isFile'},
                {expand: true, cwd: 'source/templates/', src: ['*'], dest: 'preview/templates', filter: 'isFile'},
                {expand: true, cwd: 'source/img/', src: ['*'], dest: 'preview/img', filter: 'isFile'},
                {expand: true, cwd: 'source/', src: ['index.html'], dest: 'preview/', filter: 'isFile'}
            ]
        }
    };
};
