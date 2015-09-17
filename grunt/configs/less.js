module.exports = function (grunt) {
    return {
        homepage: {
            files: {
                "preview/css/style.css" : "source/homepage/less/homepage.less"
            }
        }
    };
};