'use strict';

module.exports = function(grunt) {
    // Measure time of grunt tasks. Can help when optimizing build times
    require('time-grunt')(grunt);

    // A JIT(Just In Time) plugin loader for Grunt
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

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
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },
        // Concat
        concat: {
            options: {
                separator: ';'
            },
            // dist configuration is provided by useminPrepare
            dist: {}
        },
        // Uglify
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/css/*.css'],
            options: {
                assetsDirs: ['dist', 'dist/css']
            }
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
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    base: {
                        path: 'dist',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'src/{,*/}*.html',
                    '.src/css/{,*/}*.css',
                    'src/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['jshint', 'less', 'concat', 'concat_css', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-concat-css');

    // Register Tasks
    grunt.registerTask('build', [
        'clean',
        'jshint',
        'less',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

    grunt.registerTask('serve', ['build', 'connect:dist', 'watch']);

    grunt.registerTask('default', ['build']);

};