// test map, reduce and filter feature in ES5
var animals = ['cat', 'dog', 'bird', 'whale'];
var length = animals.map(function(animal){
	return animal.length;
});

console.log(length); // [ 3, 3, 4, 5 ]

// we could have also defined a named getLength() function for a cleaner look
function getLength(word) {
	return word.length;
}

console.log(animals.map(getLength)); // [ 3, 3, 4, 5 ]

// reduce
// The reduce() method takes two parameters: a function to apply for each element in the array, 
// and an initial value to use for the running total
var total = animals.reduce(function(sum, animal){
	return sum += animal.length;
}, 0);

console.log(total); // 15

// we could have also defined a named addLength() function for a cleaner look
function addLength(sum, word) {
	return sum+= word.length;
}

console.log(animals.reduce(addLength, 0)); // 15

// filter
// remove duplicates in an array
var arr = [1, 1, 3, 2, 4, 4, 5, 6, 6, 3, -1, 5];
var models = [];
for(var i = 0; i < arr.length; i++) {
  if(arr.indexOf(arr[i]) === i) {
      models.push(arr[i]);
  }
}

console.log(models);

// using filter
var uniqueProducts = arr.filter(function(elem, i, array) {
    return array.indexOf(elem) === i;
  }
);

console.log(uniqueProducts);
