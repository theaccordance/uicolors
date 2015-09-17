module.exports = function (grunt) {
    return {
        homepage: {
            files: [
                {expand: true, src: ['source/index.html'], dest: 'dist/', filter: 'isFile'}
            ]
        }
    };
};
