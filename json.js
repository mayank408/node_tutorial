var http = require('http');
var fs = require('fs');
var express = require('express')

var server = http.createServer(function(req,res){
	console.log('request was made : ' + req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		name: 'marry',
		job: "google",
		age: 28
	};

	res.end(JSON.stringify(myObj));

});

server.listen(3000);
console.log('Listening to port no 3000');