module.exports = function (grunt) {
    return {
        homepage: {
            files: [
                {
                    expand: true,
                    src: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-clipboard/angular-clipboard.js'
                    ],
                    dest: 'preview/js/',
                    filter: 'isFile',
                    flatten: true
                },
                {expand: true, cwd: 'source/js', src: ['*'], dest: 'preview/js', filter: 'isFile'},
                {expand: true, cwd: 'source/', src: ['index.html'], dest: 'preview/', filter: 'isFile'}
            ]
        }
    };
};
