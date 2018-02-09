// closure
var a = 5; 
function runMe(a){ 
	console.log(a); // 6
 
	function innerRun(){ 
	  console.log(b); // 7 
	  console.log(c); // undefined
	} 
 
	var b = 7; 
	innerRun(); 
	var c = 8; 
} 

runMe(6);

// broken closure 
for ( var d = 0; d < 3; d++ ) { 
	setTimeout(function(){ 
		console.log(d); // will print 'd' 3 times 
	}, 100); 
}

// fix the closure above with self-executing, temporary function
for ( var d = 0; d < 3; d++ ) { (function(d){
		setTimeout(function(){ 
			console.log(d); // will print 0 1 2 times 
		}, 100);
	})(d);
}