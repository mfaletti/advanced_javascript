// test map/reduce feature in ES5
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
var total = animals.reduce(function(sum, animal){
	return sum += animal.length;
}, 0);

console.log(total); // 15

// we could have also defined a named addLength() function for a cleaner look
function addLength(sum, word) {
	return sum+= word.length;
}

console.log(animals.reduce(addLength, 0)); // 15
