var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var marry = new Person('marry');

var people = [james,marry];

people.forEach(function(Person){

	Person.on('speak',function(msg){
		console.log(Person.name + 'said ' + msg);

	});

});

james.emit('speak', 'HI');
marry.emit('speak', 'hello');

