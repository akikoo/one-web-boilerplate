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


require(['config'], function() {
    
    // Load the modules
    require([
        'jquery',
        'a',
        'b',
        'c'
        ], function ($, a, b, c) {

            'use strict';

            var App = {

                init : function () {

                /*
                $('.module .source').hide();

                $('.module h3 a').append(' <span>+</span>');
                $('.module h3 a').attr('title', 'Show code');
                
                $('.module').on('click', 'a', function() {
                
                    $(this).parents('.module').find('.source').slideToggle(400);
                    var toggleIcon = $(this).find('span').text();
                    var titleTxt = $(this).attr('title');
                    $(this).find('span').text((toggleIcon === '+') ? '−' : '+');
                    $(this).attr('title', (titleTxt === 'Show code') ? 'Hide code' : 'Show code');
                                
                    return false;

                });
                */

                }
            };

            return App.init();
        }
    );
});