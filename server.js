var http = require("http")
var url = require("url")

function start(route,handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for "+pathname+" received. ");

		route(pathname,handle, response);
	}

	http.createServer(onRequest).listen(2024);

	console.log("Server Started");	
}

exports.start = start;
