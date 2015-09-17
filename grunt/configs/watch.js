module.exports = function (grunt) {
    return {
        grunt: {
            files: ['gruntfile.js', 'grunt/configs/*.js', 'grunt/tasks/*.js'],
            options: {
                reload: true
            }
        },
        project: {
            files: ['source/**/*'],
            tasks: ['clean', 'copy', 'less']
        }
    };
};
