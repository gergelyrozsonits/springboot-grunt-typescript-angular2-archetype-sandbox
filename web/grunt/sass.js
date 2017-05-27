module.exports = {
    build: {
        files: [{
            expand: true,
            cwd: 'src/main/scss',
            src: '**/*.{scss,sass}',
            dest: 'target/generated-resources/src/main/scss/',
            ext: '.css'
        }],
        options: {
            includePaths: ['node_modules/bootstrap/scss/'],
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapRoot: '/'
        }
    }
};