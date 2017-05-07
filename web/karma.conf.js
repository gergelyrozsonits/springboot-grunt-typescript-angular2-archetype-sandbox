module.exports = function (config) {
    config.set({
        files: [
            {pattern: 'target/test-resources/static/**/*.js', included: true, watched: false},
            {pattern: 'node_modules/!(karma-systemjs)/**/*.js', included: false, watched: false}
        ],
        frameworks: [
            "systemjs",
            "jasmine",
        ],
        plugins: [
            'karma-jasmine',
            'karma-systemjs',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine-html-reporter',
        ],
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'],
        systemjs: {
            configFile: './system.conf.js',
            includeFiles : [
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/zone.js/dist/zone.js',
                'node_modules/es6-shim/es6-shim.js'
            ],
            testFileSuffix: ".spec.js",
            config: {
                paths: {
                    'traceur': 'node_modules/traceur/bin/traceur.js',
                    'systemjs': 'node_modules/systemjs/dist/system.js',
                    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
                    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
                    '*': 'target/test-resources/static/*'
                }
            }
        }
    });
};