/**
 * 
 * RequireJS build profile for stylesheets
 * Defines paths where to read and write, as well as optimization options
 * 
 * baseUrl		: directory path to the source, relative to this file
 * dir			: directory path to save the output, relative to this file
 * optimizeCss	: CSS optimization option "standard": @import inlining, comment removal and line returns
 * fileExclusionRegExp : files to exclude (here we exclude all .*, .txt, .js, .json, .html, .png, .jpg and .gif files under baseUrl)
 * 
 * More info: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


({
	baseUrl		: "../../webroot/assets",
	dir			: "../publish/assets", 
	optimizeCss : "standard",
	fileExclusionRegExp : /^\.|\.((txt)|(js)|(json)|(html)|(png)|(jpg)|(gif))$/ 
})