/**
 * $Id$
 * Reusable library functions
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 * @requires jQuery - http://www.jquery.com/ 
 * 
 */


// Define global namespace
var MYSITE = window.MYSITE || {};



// Define sub-namespaces for browser and capability checks
/**
 * @namespace Some feature flags from Modernizr available on MYSITE.support
 */
MYSITE.support = {
	localStorage	: Modernizr.localstorage,
	appCache		: Modernizr.applicationcache,
	// bind to touchstart, touchmove, etc. Else bind to normal click, mousemove, etc.
	touch			: Modernizr.touch
};/* /MYSITE.support */



/**
 * @namespace Internet Explorer checks (from conditional comments) available on MYSITE.browser
 */
MYSITE.browser = {
	iem7	: document.documentElement.className.indexOf('iem7') >= 0
};/* /MYSITE.browser */



/**
 * @namespace Common functions available on MYSITE.lib
 */
MYSITE.lib = {	

	/**
	 * Lazy loads JavaScript files
	 * 
	 * @param {String} url of an external script 
	 * @return N/A
	 * See also http://friendlybit.com/js/lazy-loading-asyncronous-javascript/
	 */
	loadJS: function (url) {
		var d		= document,
			t		= 'script',
			s		= d.createElement(t),
			x		= d.getElementsByTagName(t)[0];
		s.async = true;
		s.src	= url;
			
		d.body.appendChild(s);				
		x.parentNode.insertBefore(s,x);		
	}, 


	/**
	 * Lazy loads stylesheets
	 * 
	 * @param {String} url of the stylesheet 
	 * @return N/A
	 */	
	loadCSS: function (url) {
		var d = document,
			t = 'link',
			s = d.createElement(t),
			x = d.getElementsByTagName('head')[0];
		s.rel = 'stylesheet';
		s.href = url;
		x.appendChild(s);
	},


	//quick element class existence function
	hasClass: function( el, classname ){
		return el.className.indexOf( classname ) >= 0;
	}


};/* /MYSITE.lib */
