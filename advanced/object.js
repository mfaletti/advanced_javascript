// examinining the basics of an objectfunction Ninja(){} 

function Ninja(){} 
var ninja = new Ninja(); 
 
console.log( typeof ninja == "object" ? true : false) // true. the type of the instance is still an object.   
console.log( ninja instanceof Ninja) // true, The object was instantiated properly. 
console.log( ninja.constructor == Ninja); // true, The ninja object was created by the Ninja function.

// We can still use the constructor to build other instances.
var ninjaB = new ninja.constructor();
console.log( ninjaB instanceof Ninja); // true, Still a ninja object.

var ninja3 = (function(){ 
 function Ninja(){} 
 return new Ninja(); 
})(); 

var ninja4 = new ninja3.constructor;
console.log( ninja3.constructor == ninja4.constructor); // true, the ninjas come from the same source.