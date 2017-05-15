"use strict";
module.exports = function (grunt) {
    function loadConfig(pattern) {
        var config = {},
            fileName,
            fileData;

        grunt.file.expand(pattern).forEach(function(filePath) {
            fileName = filePath.split('/').pop().split('.')[0];
            fileData = require('./' + filePath)(grunt);
            config[fileName] = fileData;
        });

        return config;
    }

    function loadGrunt() {
        var config = {
            pkg: grunt.file.readJSON('package.json')
        };

        require('load-grunt-tasks')(grunt);

        if (grunt.file.exists('grunt/tasks')) {
            grunt.log.writeln('task directory found, loading tasks...');
            grunt.loadTasks('grunt/tasks');
        }

        grunt.util._.extend(config, loadConfig('grunt/configs/**/*.js'));

        grunt.initConfig(config);
    }
    loadGrunt();

    function getPalettes() {
        var palettes = [];
        grunt.file.expand({filter: 'isFile'},'palettes/**').forEach(function (filePath) {
            palettes.push(grunt.file.readJSON(filePath));
        });
        grunt.config('palettes', palettes);
    }

    grunt.registerTask('getPalettes', getPalettes);
    grunt.registerTask('build', ['clean', 'jsonlint', 'ngAnnotate',  'copy:source']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('publish', ['build', 'gh-pages']);
};
