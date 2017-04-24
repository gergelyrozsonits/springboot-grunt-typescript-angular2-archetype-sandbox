module.exports = {
    source: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/ts/',
            src: ['**'],
            dest: 'target/classes/static'
        }]
    },
    test: {
        files: [{
            expand: true,
            cwd: 'target/generated-resources/src/main/ts/',
            src: ['**'],
            dest: 'target/test-resources/static'
        }, {
            expand: true,
            cwd: 'target/generated-resources/src/test/ts/',
            src: ['**'],
            dest: 'target/test-resources/static'
        }]
    }
};