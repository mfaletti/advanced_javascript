// call() and apply()
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

var test = obj.prop.getFullName;
console.log(test()); // "John Doe"