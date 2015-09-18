module.exports = function (grunt) {
    return {
        homepage: {
            files: [
                {
                    expand: true,
                    src: [
                        'node_modules/angular/angular.js'
                    ],
                    dest: 'preview/js/',
                    filter: 'isFile',
                    flatten: true
                },
                {expand: true, cwd: 'node_modules/bootstrap/fonts/', src: ['*'], dest: 'preview/fonts', filter: 'isFile'},
                {expand: true, cwd: 'source/templates/', src: ['*'], dest: 'preview/templates', filter: 'isFile'},
                {expand: true, cwd: 'source/', src: ['index.html'], dest: 'preview/', filter: 'isFile'}
            ]
        }
    };
};
