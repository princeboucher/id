
var proxy = require('http-proxy-middleware');

// redirect all /api calls to the backend
var apiProxy = proxy('/api', {
    target: 'http://localhost:8080',
    changeOrigin: true  
});

module.exports = {
	port: "8000",
    files : ['src/main/resources/static/dist/app.js'],
    server: {
        baseDir: "src/main/resources/static",
        middleware: {
			1: apiProxy,
	        2: require('connect-history-api-fallback')({index: '/index.html', verbose: false})        
	    },
        https : false
    },
    logLevel: "debug",
    // Open the site in Chrome & IE
    browser: ["chrome"]
};