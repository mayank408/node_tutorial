var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine' , 'ejs');
app.use('/assets', express.static('assets'));

app.get('/',function(req , res){

	res.sendFile(__dirname + '/index.html')

})

app.get('/contacts',function(req , res){

		console.log('hellos');

	res.render('contacts', {qs: req.query});

})

app.post('/contacts' , urlencodedParser, function(req , res){
		console.log('hello');

	console.log(req.body);
	res.render('contacts-success', {data: req.body});

})

app.get("/hello", function (req,res) {
	res.send("hello")
})

app.get('/profile/:name', function(req,res){

	var data = {age: 29, job:'coder' , hobbie: ['cycling' , 'fishing' , 'coding']};
	res.render('profile',{person: req.params.name , data:data})

})


app.listen(3000);