/**
 * $Id$
 * Main JavaScript file which calls various library functions
 * 
 * @author Aki Karkkainen
 * @url http://www.akikoo.org
 * Twitter: http://twitter.com/akikoo
 * 
 * @requires jQuery - http://www.jquery.com/
 * 
 */


/* Declare a namespace for the site */
var mySite = window.mySite || {};



/**
 * @namespace Specific functions calls from an inline end of document script block
 * Functions that need to be called before DOM ready etc. for various reasons
 * Insert inline call to mySite.functions.init() at end of document
 */
mySite.functions = {

	init: function () {
    
	}
};



// remap jQuery to $
// wrap all your temporary variables in local scope to not leak any variables in the global scope
(function($) {


	//Same as $(document).ready();
	$(function() {

		// Functions calls go here
		// eg. mySite.lib.loadJS();
		
		});


	//Methods that should be executed after ALL assets have been loaded (incl. images)
	$(window).bind("load", function() {

		// Do your stuff awhile AFTER the onload
		var t = window.setTimeout(function () {

			// Functions calls go here
		
			}, 100);
		
	});

}(this.jQuery));
