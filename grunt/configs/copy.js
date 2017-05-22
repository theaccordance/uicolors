module.exports = function (grunt) {
    return {
        source: {
            files: [
                {expand: true, cwd: 'source/', src: ['**/*.html'], dest: 'preview/', filter: 'isFile'},
                {expand: true, src: ['source/assets/*'], dest: 'preview/assets', filter: 'isFile', flatten: true},
                {expand: true, src: ['source/css/*'], dest: 'preview/css', filter: 'isFile', flatten: true},
                {expand: true, src: ['source/fonts/*'], dest: 'preview/fonts', filter: 'isFile', flatten: true},
                {expand: true, src: ['source/lib/*'], dest: 'preview/lib', filter: 'isFile', flatten: true},
                {expand: true, src: ['source/index.js'], dest: 'preview', filter: 'isFile', flatten: true},
                {expand: true, src: ['CNAME'], dest: 'preview', filter: 'isFile', flatten: true}
            ]
        }
    };
};
