var counters = function(arry){

	console.log(`the size of array is  ${arry.length}`);

}

var adder = function(a,b){

	console.log(`The sum is ${a+b}`);
}

//counter([1,2,3]);

module.exports = {
	counter: counters,
	adder: adder
};