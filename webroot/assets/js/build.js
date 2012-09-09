/**
 * 
 * RequireJS build profile for stylesheets and JavaScript files.
 * Defines paths where to read and write, as well as optimization options.
 * 
 * appDir               : The top level assets directory, relative to this file. All the files from this directory will be copied to the 'dir'.
 * baseUrl              : Directory path to the JS source files, relative to the 'appDir' above.
 * dir                  : Directory path to save the output, relative to this file.
 * 
 * mainConfigFile       : Configuration, relative to the 'baseUrl'.
 * 
 * optimizeCss          : CSS optimization option "standard": @import inlining, comment removal, line returns
 * fileExclusionRegExp  : files to exclude (here we exclude all .*, .txt, .js, .json, .html, .png, .jpg and .gif files under baseUrl)
 * fileExclusionRegExp  : files to exclude (here we exclude all .*, .txt, .json, .css, .html, .png, .jpg and .gif files under baseUrl)
 * optimize             : how to optimize all the JS files in the build output dir 
 *                        "closure": uses Google's Closure Compiler in simple optimization
 * closure              : these config options can be used to configure Closure Compiler
 * 
 * More info            https://github.com/jrburke/r.js/blob/master/build/example.build.js
 *                      https://github.com/ryanfitzer/Example-RequireJS-jQuery-Project
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

    // Configuration (paths, shim)
    mainConfigFile: 'config.js',                        // Relative to the 'baseUrl'

    // Finds require() dependencies inside a require() or define call
    findNestedDependencies: true,

    // CSS specific 
    optimizeCss : 'standard',

    // JS specific
    optimize    : 'closure', 
    closure		: {
        CompilerOptions : {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel    : 'WARNING'
    },

    //List of the modules that will be optimized
    modules: [
    {
        name: 'main'                                // relative to the 'baseUrl'
    }
    ]

})