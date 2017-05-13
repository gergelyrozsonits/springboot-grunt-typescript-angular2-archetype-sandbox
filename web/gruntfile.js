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
    grunt.registerTask('build', ['ts:build', 'string-replace:source']);
    grunt.registerTask('test', ['ts:build', 'copy:test', 'karma:unit']);
    // Please note:
    // - The 'grunt-contrib-connect' server only runs as long as grunt is running. Once grunt's tasks have completed, the web server stops.
    //   This behavior can be changed with the keepalive option, and can be enabled ad-hoc by running the task like grunt.
    //   Also please do not use the keepalive option during unit testing
    grunt.registerTask('server', ['ts:build', 'copy:js', 'connect:server::keepalive']);
};