module.exports = function(grunt, options) {
    return {
        build: {
            // Please note:
            // - baseUrl, paths and rootDirs are not working together according to https://github.com/TypeStrong/grunt-ts/issues/339
            //   these options are required for context relative module name resolution e.g.: module/name/component where the module
            //   is a under src/main/ts directory.
            //   without grunt-ts support the only way to setup a baseUrl is via the passThrough option with additional flags
            // - even if the baseUrl will be overridden via the passed value, it has been set for the IDE properly; in this way the
            //   module resolution can be done by the plugins according to the tsconfig.json
            // - outDir needs to be in /target/classes otherwise m2e will not be able to detect changes automatically
            //   for more information please see: https://github.com/Microsoft/TypeScript/issues/5039
            // - lib is required to avoid compilation problems for rxjs
            tsconfig: {
                tsconfig: "tsconfig.json",
                passThrough: true
            },
            options: {
                additionalFlags: '--baseUrl "."'
            }
        }
    }
};