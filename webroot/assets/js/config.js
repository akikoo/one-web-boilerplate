/**
 * 
 * RequireJS JavaScript paths configuration for both the runtime and optimizer.
 * 
 * More info:           https://github.com/jrburke/r.js/blob/master/build/example.build.js
 *                      https://github.com/ryanfitzer/Example-RequireJS-jQuery-Project
 *                      https://github.com/tbranyen/backbone-boilerplate
 *
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


// Set the require.js configuration
require.config({

    // Initialize the application with the main application file
    deps: ['main'],

    // Set file paths, relative to this file
    paths: {
        jquery      : 'lib/jquery-1.8.1.min',
        utils       : 'modules/utils'
    },

    // Set the configuration for scripts that are not AMD compatible
    shim: {
        jquery      : {
            exports: '$'
        },
        utils       : { 
            deps: ['jquery'] // These script dependencies should be loaded before loading a.js
        }
    } // end Shim Configuration

});