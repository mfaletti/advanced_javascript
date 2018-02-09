(function(){
	'use strict';
	// a is defined using var keyword, which means that a is local var of the IIFE. 
	// b is implicitly defined as a global var. code will raise an error if strict mode is on.
	var a = b = 5; // 
})();

console.log(b);

(function(){
	'use strict';
	// a is defined using var keyword, which means that a is local var of the IIFE. 
	// b is explicitly defined as a global var. code will not raise an error in strict mode because b explicitly references a global var.
	var a = window.b = 5; // 
})();

console.log(b);