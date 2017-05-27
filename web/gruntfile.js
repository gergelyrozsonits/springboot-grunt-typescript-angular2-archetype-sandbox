module.exports = function(grunt) {
    require('load-grunt-config')(grunt);
    // Please note:
    // - For more information about the correlation of 'baseUrl' 'path mappings' and 'rootDirs' please see:
    //   https://github.com/Microsoft/TypeScript/issues/5039
    // - Even if there are multiple root directories, the compiler does not combine folder contents. For more detailed explanation please see:
    //   https://github.com/Microsoft/TypeScript/issues/9875
    // - As its highlighted in the ticket as well the copy needs to be done at build time
    // - In order to have a proper source mapping the 'mapRoot' has been overridden; in this way in the '.js.map' the path is relative to the
    //   'src/main/ts' and 'src/test/ts' folders. Please take this into account during deploy
    grunt.registerTask('build', [
        'ts:build',
        'sass:build',
        'copy:tsSource',
        'copy:scssSource',
        'string-replace:tsSource',
        'string-replace:scssSource',
    ]);
    grunt.registerTask('test', [
        'ts:build',
        'sass:build',
        'copy:tsTest',
        'karma:unit'
    ]);
};