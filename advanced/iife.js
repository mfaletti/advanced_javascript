// Self-executing, temporary, function
(function(){ 
  var count = 0; 
 
  var timer = setInterval(function(){ 
    if ( count < 5 ) { 
      console.log( "Timer call: ", count ); // prints 0, 1, 2, 3, 4
      count++; 
    } else { 
      console.log( count == 5 ? true : false) // true. count exists via a closure
      console.log( timer ? true : false); // true. The timer reference is also via a closure.
      clearInterval( timer ); 
    } 
  }, 100); 
})(); 
 
console.log( typeof count ); // "undefined", count doesn't exist outside the wrapper 
console.log( typeof timer ); // "undefined" neither does timer