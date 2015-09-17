module.exports = function (grunt) {
    return {
        homepage: {
            options: {
                base: 'preview',
                branch: 'gh-pages'
            },
            src: '**/*'
        }
    };
};
