module.exports = function (grunt) {
    return {
        public: {
            files: [
                {expand: true, cwd: 'public/assets/', src: ['*'], dest: 'preview/assets', filter: 'isFile'},
                {expand: true, cwd: 'public/css/', src: ['*'], dest: 'preview/css', filter: 'isFile'},
                {expand: true, cwd: 'public/js/', src: ['*'], dest: 'preview/js', filter: 'isFile'},
                {expand: true, cwd: 'public/partials/', src: ['*'], dest: 'preview/partials', filter: 'isFile'},
                {expand: true, cwd: 'public/app/', src: ['**'], dest: 'preview/app', filter: 'isFile'}
            ]
        },
        index: {
            options: {
                process: function (content) {
                    return grunt.template.process(content);
                }
            },
            src: 'public/index.html',
            dest: 'preview/index.html'
        }
    };
};
