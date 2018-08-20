module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['ludo.scss'],
                tasks: ['sass'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                },
            }
        },
        /*using sass*/
        sass: {
            options: {
                sourceMap: true
            },
            dist: {

                files: {
                    'ludo.css': 'ludo.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev', ['sass', 'watch']);

};