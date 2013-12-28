function start () {
	console.log("Request handler 'start' was called. ");
	return "Hello Start";
}

function upload(){
	console.log("Request hadler 'upload' was called. ");
	return "404 Error";
}

exports.start = start;
exports.upload = upload;