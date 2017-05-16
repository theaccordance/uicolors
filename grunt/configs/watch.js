module.exports = function (grunt) {
    return {
        grunt: {
            files: ['gruntfile.js', 'grunt/configs/*.js', 'grunt/tasks/*.js'],
            options: {
                reload: true
            },
            tasks: ['build']
        },
        public: {
            files: ['source/**/*'],
            tasks: ['build']
        }
    };
};
