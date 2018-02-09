// private properties, using closures
function Ninja(){ 
  var slices = 0; 
   
  this.getSlices = function(){ 
    return slices; 
  }; 
  this.slice = function(){ 
    slices++; 
  }; 
} 
 
var ninja = new Ninja(); 
ninja.slice(); 
console.log( ninja.getSlices() == 1 ? true : false); // true
console.log( ninja.slices === undefined ? true : false); // true. ninja.slices is undefined outside the function scope