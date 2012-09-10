/**
 * 
 * RequireJS JavaScript paths configuration for both the runtime and optimizer.
 * 
 * More info: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


// Pass a config object to require
require.config({

    // Initialize the application with the main application file.
    deps: ['main'],

    // Set file paths, relative to this file
    paths: {
        'jquery'    : 'lib/jquery-1.8.1.min',
        'a'         : 'modules/a',
        'b'         : 'modules/b',
        'c'         : 'modules/c'
    },

    // Set the configuration for scripts that are not AMD compatible
    shim: {
        'jquery': {
            exports: '$'
        },
        'a': { 
            deps: ['jquery'] // These script dependencies should be loaded before loading b.js
        },
        'b': { 
            deps: ['jquery', 'a'] // These script dependencies should be loaded before loading a.js
        },
        'c': { 
            deps: ['jquery', 'b'] // These script dependencies should be loaded before loading a.js
        }
    } // end Shim Configuration

});