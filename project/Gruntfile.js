'use strict';

module.exports = function(grunt) {
    // Measure time of grunt tasks. Can help when optimizing build times
    require('time-grunt')(grunt);

    // A JIT(Just In Time) plugin loader for Grunt
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['dist', 'tmp']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'src/js/{,*/}*.js'
                ]
            }
        },
        less: {
            default: {
                files: {
                    'tmp/less-compiled/compiled.css': 'src/less/*.less'
                }
            },
        },
        // Concat
        concat: {
            options: {
                separator: ';',
                stripBanners: false
            },
            customscripts: {
                src: ['src/js/*.js'],
                dest: 'tmp/js/main.js'
            },
            vendorscripts: {
                src: ['lib/bootstrap/dist/js/bootstrap.js'],
                dest: 'tmp/js/vendor.js'
            }
        },
        concat_css: {
            customcss: {
                src: ['tmp/less-compiled/*.css', 'src/css/*.css', '!src/css/debug*.css'],
                dest: 'tmp/css/main.css'
            },
            debugcss: {
                src: ['src/css/debug*.css'],
                dest: 'tmp/css/debug.css'
            },
            vendorcss: {
                src: ['lib/bootstrap/dist/css/bootstrap.css', 'lib/font-awesome/css/font-awesome.css'],
                dest: 'tmp/css/vendor.css'
            }
        },
        // Uglify
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        // now copy everything from tmp to dist
        copy: {
            htmls: {
                cwd: 'src',
                src: ['**/*.html'],
                dest: 'dist/',
                expand: true
            },
            assets: {
                cwd: 'tmp',
                src: ['js/*', 'css/*'],
                dest: 'dist',
                expand: true
            },
            media: {
                cwd: 'src',
                src: ['img/*'],
                dest: 'dist',
                expand: true
            },
            fonts: {
                files: [{
                    //for bootstrap fonts
                    expand: true,
                    nonull: true,
                    dot: true,
                    cwd: 'lib/bootstrap/dist',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }, {
                    //for font-awesome
                    expand: true,
                    nonull: true,
                    dot: true,
                    cwd: 'lib/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-concat-css');

    // Register Tasks
    grunt.registerTask('build', ['clean', 'jshint', 'less', 'concat', 'concat_css', 'copy']);

    grunt.registerTask('default', ['build']);

};