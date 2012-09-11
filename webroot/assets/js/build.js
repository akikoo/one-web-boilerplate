/**
 * 
 * RequireJS build profile for stylesheets and JavaScript files.
 * Defines paths where to read and write, as well as optimization options.
 * 
 * baseUrl              : Directory path to the JS source files, relative to the 'appDir'.
 * appDir               : The top level assets directory, relative to this file. All the files from this directory will be copied to 'dir'.
 * dir                  : Directory path to save the output, relative to this file.
 *
 * mainConfigFile       : Configuration, relative to the 'baseUrl'.
 * 
 * name                 : Optimize a module and its dependencies with a single file as the output.
 * 
 * wrap                 : Use this to encapsulate the module code so that define/require are not globals.
 *
 * optimizeCss          : CSS optimization option "standard": @import inlining, comment removal, line returns.
 *
 * optimize             : How to optimize all the JS files in the build output dir. "closure": uses Google's Closure Compiler in simple optimization.
 *
 * closure              : These config options can be used to configure Closure Compiler.
 * 
 * More info            https://github.com/jrburke/r.js/blob/master/build/example.build.js
 *                      https://github.com/ryanfitzer/Example-RequireJS-jQuery-Project
 *                      https://github.com/tbranyen/backbone-boilerplate
 *
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


({
    // Base paths 
    baseUrl     : 'js',                                 // The JS source dir, relative to the 'appDir'
    appDir      : '../../../webroot/assets',            // The top level assets directory, relative to this file
    dir         : '../../../build/publish/temp/assets', // The CSS and JS output dir, relative to this file

    // Include the main configuration file (paths, shim)
    mainConfigFile: 'config.js',                        // Relative to the 'baseUrl'

    // Root application module
    name: 'config',

    // Do not wrap everything in an IIFE
    wrap: false,

    // CSS optimization
    optimizeCss : 'standard',

    // JS optimization
    optimize    : 'closure', 
    closure     : {
        CompilerOptions : {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel    : 'WARNING'
    }
})