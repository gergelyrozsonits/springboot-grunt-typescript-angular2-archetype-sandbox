module.exports = {
    // As the generated source mapping (by the typescript compiler) using absolute path with 'src/main/ts' root dir this operation cannot be done by this plugin: to combine the
    // string replacement + resource management another plugin (grunt-string-replace) needs to be involved.
    test: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/ts/',
            src: ['**/*.js'],
            dest: 'target/test-resources/'
        }, {
            expand: true,
            cwd: 'target/generated-resources/src/test/ts/',
            src: ['**/*.js'],
            dest: 'target/test-resources/'
        }]
    }
};