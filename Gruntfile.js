module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            sass: [".sass-cache", "assets/css/style.css"],
            js: ["src/js/main.js", "assets/js/main.min.js"],
            tmp: ["tmp"]
        },
        compass: {
            minified: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'assets/css',
                    environment: 'production'
                }
            },
            expanded: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'assets/css/src',
                    environment: 'production',
                    outputStyle: 'expanded'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            build: {
                src: 'assets/css/style.css'
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            build: {
                files: {
                    'tmp/js/require.js': [
                        'src/js/require.js',
                    ],
                    'tmp/js/conf/page/main.js': [
                        'src/js/conf/page/main.js',

                        'src/js/core/chaos/jquery.js',
                        'src/js/core/jquery/jquery.js',
                        'src/js/core/extra/jquery.js',

                        'src/js/kit/dom/parseDom.js',

                        'src/js/conf/global.js',

                        'src/js/more/es5-safe.js',
                        'src/js/more/class.js',
                        'src/js/more/events.js',
                        'src/js/more/base.js',
                        'src/js/more/querystring.js',
                        'src/js/more/mustache.js',

                        'src/js/common/historyM.js',
                        'src/js/common/listener.js',
                        'src/js/common/transmission.js',
                        'src/js/common/transport.js',

                        'src/js/kit/util/attempt.js',
                        'src/js/kit/dom/hiddenContainer.js',
                        'src/js/kit/env/browser.js',
                        'src/js/kit/str/parseURL.js',

                        'src/js/common/router.js',
                        'src/js/common/pageletM.js',
                        'src/js/common/channel.js',
                        'src/js/common/layer.js',
                        'src/js/common/location.js',
                        'src/js/mods/util/getFormatedUrl.js',

                        'src/js/vendor/highlight.pack.js',
                        // 'src/js/vendor/nprogress.js',

                        'src/js/conf/routes/blog.js',
                        'src/js/conf/routes/bloglist.js',
                        'src/js/conf/routes/staticpage.js',

                        'src/js/conf/page/main.js',

                        'src/js/conf/page/start.js'
                    ],

                    'tmp/js/conf/pl/blog.js': ['src/js/mods/channel/blog.js', 'src/js/mods/trans/blog.js', 'src/js/mods/blog.js', 'src/js/conf/pl/blog.js'],

                    'tmp/js/conf/pl/bloglist.js': ['src/js/mods/trans/bloglist.js', 'src/js/mods/bloglist.js', 'src/js/conf/pl/bloglist.js'],

                    'tmp/js/conf/pl/staticpage.js': ['src/js/mods/trans/staticpage.js', 'src/js/mods/staticpage.js', 'src/js/conf/pl/staticpage.js'],

                    'tmp/js/conf/pl/nav.js': ['src/js/mods/nav.js', 'src/js/conf/pl/nav.js']

                }
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: /\/src\/js/g,
                        replacement: '/assets/js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['tmp/js/conf/page/main.js'],
                    dest: 'tmp/js/conf/page/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['require']
                }
            },
            build: {
                expand: true,
                cwd: 'tmp/js',
                src: '**/*.js',
                dest: 'assets/js'
            }
        },
        copy: {
            nprogress: {
                src: 'src/js/vendor/bower/nprogress.js',
                dest: 'tmp/js/vendor/bower/nprogress.js'
            }
        },
        watch: {
            sass: {
                files: 'src/scss/**/*.scss',
                tasks: ['clean:sass', 'compass:minified', 'compass:expanded', 'autoprefixer'],
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: ['clean:js', 'concat', 'copy', 'uglify'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['clean:sass', 'clean:js', 'compass:minified', 'compass:expanded', 'autoprefixer', 'concat', 'copy', 'replace', 'uglify', 'clean:tmp']);
};