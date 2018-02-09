// The basics of how prototypal inheritance works
function Person(){}
Person.prototype.dance = function(){};

function Ninja(){}

// Achieve similar, but non-inheritable results
Ninja.prototype = Person.prototype;
Ninja.prototype = { dance: Person.prototype.dance };

console.log(new Ninja instanceof Person); // false. fails with bad prototype chain.

// only this maintains the prototype chain
Ninja.prototype = new Person();
console.log(new Ninja instanceof Person); // true.

var ninja = new Ninja();
console.log( ninja instanceof Ninja); // true ninja receives functionality from the Ninja prototype. 
console.log( ninja instanceof Person); // true  ...and the Person prototype 
console.log( ninja instanceof Object); // true, ... and the Object prototype

// another example
function Human(){}

Human.prototype.getName = function() {
	return this.name;
}

function Me(name){
	this.name = name;
}

Me.prototype = new Human(); // inherit the prototype chain from Human object

var me = new Me("Michael");
console.log(me.getName()); // Michael