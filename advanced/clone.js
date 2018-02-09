// deep clone an object
function clone(obj) {
	if (obj == null || typeof obj !== 'object')
		return obj;

	if (obj instanceof Date)
		var temp = new obj.constructor(); // or new Date(obj)
	else temp = obj.constructor();

	for (var key in obj) {
		temp[key] = (typeof obj[key] === 'object' &&  obj[key] !== null) ? clone(obj[key]) : obj[key];
	}

	return temp;
}

var p = {
	a:1,
	b:2,
	c:{
		d:3,
		e:{
			f:['stuff']
		}
	},
	d:['test', 'deepcopy'],
	func:function(){
		console.log(this.c);
		return true
	}
};

var c = clone(p);

c.a = 10;
c.c.d = 30;

console.log(p);
console.log(c);

c.c.e = [];

console.log(p);
console.log(c);