module.exports = function (grunt) {
    return {
        grunt: {
            files: ['gruntfile.js', 'grunt/configs/*.js', 'grunt/tasks/*.js'],
            options: {
                reload: true
            },
            tasks: ['build']
        },
        project: {
            files: ['source/**/*'],
            tasks: ['clean', 'copy', 'concat', 'less']
        }
    };
};
