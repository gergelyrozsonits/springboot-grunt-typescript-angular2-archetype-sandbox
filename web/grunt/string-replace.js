module.exports = {
    tsSource: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/ts/',
            src: ['**/*'],
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
    },
    scssSource: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/scss/',
            src: ['**/*'],
            dest: 'target/classes/static/'
        }],
        options: {
            replacements: [{
                pattern: /(?:..\/)+src\/main\/scss\/(.*)/g,
                replacement: '$1'
            }]
        }
    }
};