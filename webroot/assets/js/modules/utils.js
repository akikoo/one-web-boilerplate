/**
 *
 * Reusable utility functions
 * 
 * Ideally, all the scripts you use would wrap themselves in a define() call so 
 * that RequireJS can understand what dependencies need to be loaded before 
 * defining the script's functionality.
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 **/


define([
    // Libraries
    'jquery'
],


function ($) {

    'use strict';

    var utils = {

        /**
         * @author Aki Karkkainen
         * @description Loads stylesheets.
         * @param {String} url Stylesheet url.
         * @example utils.loadCSS('/assets/css/new.css');
         * @returns N/A
         */
        loadCSS: function (url) {

            var d   = document,
                s   = d.createElement('link'),
                x   = d.getElementsByTagName('head')[0];

            s.rel   = 'stylesheet';
            s.href  = url;
            x.appendChild(s);
        },


        /**
         * @author Aki Karkkainen
         * @description Creates script tags dynamically via JavaScript. Non-blocking download begins immediately, and the script executes as soon as it is downloaded completely.
         * @param {String} url Script url.
         * @example utils.loadJS('/assets/js/modules/new.js');
         * @returns N/A
         */
        loadJS: function (url) {

            var d   = document,
                js  = d.createElement('script');

            js.src  = url;
            (d.head || d.getElementsByTagName('head')[0]).appendChild(js);
        },


        /**
         * @author Aki Karkkainen
         * @description Checks for Internet Explorer browser (all IE versions) using conditional comments.
         * @example utils.isIE();
         * @returns {Boolean} Returns true for IE and false on all other browsers (useful if we only need to detect IE in general, without version number).
         */
        isIE: function () {
            return /*@cc_on!@*/false;
        },


        /**
         * @author Aki Karkkainen
         * @description Checks for specific Internet Explorer browser version from conditional comments.
         * @param {String} ieversion IE version string from conditional comments (ie6, ie7, iem7, ie8, ie9).
         * @example utils.isIEVersion(ie7);
         * @returns {Boolean} Returns true for IE version passed in as a parameter.
         */
        isIEVersion: function (ieversion) {
            return document.documentElement.className.indexOf(ieversion) >= 0;
        }

    };

    return utils;

});