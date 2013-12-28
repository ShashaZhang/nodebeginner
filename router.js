function route(pathname,handle){
	console.log("about to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();	
	}else{
		console.log("No request handler found for " + pathname);
		return "Hello Anoymous";
	}
	
}
exports.route = route;
