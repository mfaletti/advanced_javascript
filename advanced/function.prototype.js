function gizmo(id, name) {
	this.id = id;
	this.name = name;
}

gizmo.prototype.toString = function(){
	return this.name + this.id;
};

var hoozit = new gizmo(1, "hoozit");

gizmo.prototype.test = function(id) {
	return this.id === id;
};

console.log(hoozit.toString());
console.log(hoozit.test(2));


function ninja() {
	this.swingSword = function(){
		return true;
	}
}

ninja.prototype.swingSword = function() {
	return false;
}

var n = new ninja();
console.log(n.swingSword()); // true. calls the instance method, not the prototype method