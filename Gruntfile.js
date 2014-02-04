module.exports = function(grunt) {

    var javascript = [
        'app/scripts/jquery.min.js',
        'app/scripts/mustache.js',
        'app/scripts/app.js',
    ];

    // On configure les taches
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: javascript,
                dest: 'dist/scripts/app.min.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                src: 'dist/scripts/app.min.js',
                dest: 'dist/scripts/app.min.js'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/resources/images/',
                    src: '**/*.{png,gif,jpg}',
                    dest: 'dist/resources/images/'
                }]
            }
        },

        'string-replace': {
            dist: {
                options: {
                    {
                        pattern: '<script type="text/javascript" src="app/scripts/jquery.min.js"></script><script type="text/javascript" src="app/scripts/mustache.js"></script><script type="text/javascript" src="app/scripts/app.js"></script>',
                        replacement: '<script type="text/javascript" src="dist/scripts/app.min.js"></script>'
                    }
                },
                files: [{
                    src: 'index.html',
                    dest: 'index.html'
                }]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            dist: {
                src: 'app/index.html',
                dest: 'dist/index.html'
            }
        }
    });

    // On charge les modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // On enregistre les taches
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'imagemin',
        'htmlmin',
        'string-replace'
    ]);

};
