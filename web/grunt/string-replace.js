module.exports = {
        source: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/ts/',
            src: ['**/*'],
            dest: 'target/classes/static/'
        },{
            expand: true,
            cwd: 'src/main/ts/',
            src: ['**/*.ts'],
            dest: 'target/classes/static/'
        },{
            expand: true,
            cwd: '.',
            src: ['system.conf.js'],
            dest: 'target/classes/static/'
        }],
        options: {
            replacements: [{
                pattern: /sourceMappingURL=\/src\/main\/ts\/(.+)/g,
                replacement: 'sourceMappingURL=/$1'
            }, {
                pattern: /"sources":\["src\/main\/ts\/(.+)"]/g,
                replacement: '"sources":["$1"]'
            }]
        }
    }
};