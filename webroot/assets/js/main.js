/**
 * 
 * main.js file that imports library modules and plugins
 * Using Require.js AMD script loader
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


/*
 * Load the modules (using the Require order.js plugin for greater control)
 **/
define([
	'lib/require/plugins/order',
	'lib/jquery-1.7.2.min', 
	'mylib'
	], function (order, $, data) {

		'use strict';

		// create module
		var App = {

			init : function () {

			}
		};

		return App.init();

	// Do your stuff awhile AFTER the onload
	//window.setTimeout(function () {

		//Make things happen now 
		//return App.init();

	//}, 100);

	});