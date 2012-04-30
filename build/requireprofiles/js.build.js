/**
 * 
 * RequireJS build profile for JavaScript files
 * Defines paths where to read and write, as well as optimization options
 * 
 * baseUrl		: directory path to the source, relative to this file
 * dir			: directory path to save the output, relative to this file
 * fileExclusionRegExp : files to exclude (here we exclude all .*, .txt, .json, .css, .html, .png, .jpg and .gif files under baseUrl)
 * optimize		: how to optimize all the JS files in the build output dir 
 *				  "closure": uses Google's Closure Compiler in simple optimization
 * closure		: these config options can be used to configure Closure Compiler
 * 
 * More info: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * 
 * @author Aki Karkkainen
 * @url https://github.com/akikoo/one-web-boilerplate
 * Twitter: http://twitter.com/akikoo
 * 
 */


({
	baseUrl		: "../../webroot/assets/js",
	dir			: "../publish/assets/js", 
	fileExclusionRegExp : /^\.|\.((txt)|(json)|(css)|(html)|(png)|(jpg)|(gif))$/, 
	optimize    : "closure", 
	closure		: {
		CompilerOptions : {},
		CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
		loggingLevel    : 'WARNING'
	},
	
    catchError: {
        define: true
    },
	
	modules: [
		{
		name: "main"
		}
	]

})