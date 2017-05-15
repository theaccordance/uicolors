module.exports = function (grunt) {

    return {
        source: {
            options: {
                add: true
            },
            files: [
                {expand: true, cwd: 'source/', src: ['app/**/*.js'], dest: 'preview/', filter: 'isFile'}
            ]
        }
    };
};