//The function accepts an integer that specifies how many times the string has to be repeated. 
//The function returns the string repeated the number of times specified
String.prototype.repeatify = String.prototype.repeatify || function(times) {

	if (times < 1) return "";
	return this.repeatify(times-1) + this;
}

// test
console.log("hello".repeatify(3));