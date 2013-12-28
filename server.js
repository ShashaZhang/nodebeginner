var http = require("http")

function start(){
	http.createServer(function(request, response){
	console.log("request received");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world");
	response.end();
	}).listen(2024);

	console.log("Server Started");	
}

exports.start = start;
