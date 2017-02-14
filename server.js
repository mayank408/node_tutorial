var http = require('http');

var server = http.createServer(function(req,res){
	console.log('request was made : ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("hello world hellloo");

});

server.listen(3000);
console.log('Listening to port no 3000');