/**
 * $Id$
 * Reusable library functions
 * 
 * @author Aki Karkkainen
 * @url http://www.akikoo.org
 * Twitter: http://twitter.com/akikoo
 * 
 * @requires jQuery - http://www.jquery.com/ 
 * 
 */

var mySite = window.mySite || {};


/**
 * @namespace Common re-used functionality.
 */
mySite.lib = {	

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
	}
	

};/* /mySite.lib */
