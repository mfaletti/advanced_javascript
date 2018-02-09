// "this" context
var fullname = "John Doe";

var obj = {
	fullname: "Michael F",
	prop: {
		fullname: "Anthony B",
		getFullName: function() {
			return this.fullname;
		}
	}
};

console.log(obj.prop.getFullName()); // Anthony B
var test = obj.prop.getFullName;
console.log(test()); // "John Doe"

// fix test() so that it prints "Anthony B"
console.log(test.call(obj.prop));