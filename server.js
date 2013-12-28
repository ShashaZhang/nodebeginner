var http = require("http")
var url = require("url")

function start(route,handle){
	function onRequest(request, response){
		console.log("request received");
		var pathname = url.parse(request.url).pathname;
		console.log("request for "+pathname+" received");

		var result = route(pathname,handle);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(result);
		response.end();
	}

	http.createServer(onRequest).listen(2024);

	console.log("Server Started");	
}

exports.start = start;
