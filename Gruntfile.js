'use strict';
module.exports = function( grunt ) {

    /**
     * Carrega todas as Task
     * Não sendo necessário declarar grunt.registerTask();
    */
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var appConfig = {
        
        // Definindo as Pastas do Projeto 
        dirs: {
            // assets_img: "assets/img",
            assets_js: "assets/js",
            assets_sass: "assets/sass",
            assets_sprites: "assets/sprites",
            assets_fonts: "assets/webfonts",
            fonts: "dist/fonts",
            images: "dist/img",
            js: "dist/js"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
       

        // Usando o Compass para compilar arquivos Sass/Scss para CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb"
                }
            }
        },

        // Uglify para concatenar, minificar e fazer mapa de códigos
        uglify: {
            plugins: {
                files: {
                    'dist/js/plugins.min.js': [
                        'assets/js/jquery.js',
                        'assets/js/bootstrap.js',
                        'assets/js/analytics.js'
                    ],
                    'dist/js/main.min.js':[
                       'assets/js/jquery.js',
                       'assets/js/bootstrap.js',
                       'assets/js/analytics.js',
                       'assets/js/geral.js'
                    ]
                }
            }
        },

        // Linting arquivos CSS com csslint
        csslint: {
            dev: {
                csslintrc: '.csslintrc'
            },
            strict: {
                src: ['assets/sass/*.scss']
            }
        },

        // Otimização de Imagens
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: '**/*',
                    dest: 'dist/img/'
                }]
            }
        },

        // Notificações na Tela
        notify: {
            compass: {
                options: {
                    title: "SASS - <%= pkg.title %>",
                    message: "Compilado e minificado com sucesso!"
                }
            },
            uglify: {
                options: {
                    title: "Javascript - <%= pkg.title %>",
                    message: "Compilado e minificado com sucesso!"
                }
            },
            image: {
                options: {
                    title: "<%= pkg.title %>",
                    message: "Imagens otimizadas com sucesso!"
                }
            }
        },

        // Watch
        watch: {
              compass: {
                files: ['assets/sass/**/*.{scss,sass}'],
                tasks: ['compass']
              }
            },
            
        browserSync: {
            default_options: {
                bsFiles: {
                    src: ['dist/css/*.css', '*.*']
                }
            },
            options: {
                watchTask:true,
                server: {
                    baseDir: "./"
                }
            }
        }
    };

    // Iniciando as configurações do Grunt
    grunt.initConfig( appConfig );

    // Tarefa padrão
    grunt.registerTask('default', [ 'browserSync', 'compass', 'uglify', 'watch' ]);

    // Compass + Notify
    grunt.registerTask('compilarCSS', [ 'compass', 'notify:compass' ]);

    // Concatenar e minificar arquivos de javascript
    grunt.registerTask('uglifyJS', [ 'uglify', 'notify:uglify' ]);

    // Compass + Csslint
    grunt.registerTask('lintarCSS', [ 'compass', 'csslint:strict' ]);

    // Registrar task 'i' para otimizar imagens com imagemin
    grunt.registerTask('otimizar', [ 'imagemin', 'notify:image' ]);

    // Browser sync
    grunt.loadNpmTasks('grunt-browser-sync');

    // Aliases para as tarefas
    grunt.registerTask( "b", [ "browserSync" ] );
    grunt.registerTask( "c", [ "compilarCSS" ] );
    grunt.registerTask( "l", [ "lintarCSS" ] );
    grunt.registerTask( "i", [ "otimizar" ] );
    grunt.registerTask( "u", [ "uglifyJS" ] );
    grunt.registerTask( "w", [ "watch" ] );
};
