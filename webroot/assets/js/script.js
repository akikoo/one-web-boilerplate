/**
 * $Id$
 * Main JavaScript file which calls various library functions
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 * @requires jQuery - http://www.jquery.com/
 * 
 */


/* Declare a namespace for the site */
var MYSITE = window.MYSITE || {};



/**
 * Specific functions calls from an inline end of document script block
 * @namespace MYSITE
 * 
 * Functions that need to be called before DOM ready
 * Insert inline call to MYSITE.functions.init() at end of document
 */
MYSITE.functions = {

	init: function () {
    
	}
};



// remap jQuery to $
// wrap all your temporary variables in local scope to not leak any variables in the global scope
(function($) {


	//Same as $(document).ready();
	$(function() {

		// Functions calls go here
		// eg. MYSITE.lib.loadJS();


		// JavaScript experience divide 
		// Detect support for Aplication Cache and localStorage
		var enhanced = MYSITE.support.localStorage
					|| MYSITE.support.appCache;

		// Detect support for touch events   
		var touchEnhanced = MYSITE.support.touch;
		});
		
		
		if (!enhanced) {
			//last stop for old browsers!
		} else {
			//bring on the enhancements
		}

	});


	//Methods that should be executed after ALL assets have been loaded (incl. images)
	$(window).bind("load", function() {

		// Do your stuff awhile AFTER the onload
		var t = window.setTimeout(function () {

			// Functions calls go here
		
			}, 100);
		
	});

}(this.jQuery));
