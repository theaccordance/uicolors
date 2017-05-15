module.exports = function (grunt) {
    return {
        preview: {
            options: {
                hostname: 'localhost',
                port: '4949',
                base: 'preview'
            }
        }
    };
};