// inspired by https://scotch.io/bar-talk/copying-objects-in-javascript
// An object is said to be shallow copied when the source top-level properties are copied without any reference 
// and there exist a source property whose value is an object and is copied as a reference.

/* The naive way of copying objects. 
 * Pitfall: 
 * objCopy object has a new Object.prototype method different from the mainObj object prototype method, 
 * which is not what we want. We want an exact copy of the original object.
 * The code above only copies enumerable properties of mainObj.
 * Only shallow copies will be made
 * If one of the properties in the original object is an object itself, then 
 * it will be shared between the copy and the original, making their respective properties point to the same object.
 */
function copy(mainObj) {
  let objCopy = {}; // objCopy will store a copy of the mainObj
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // copies each property to the objCopy object
  }
  return objCopy;
}

const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

let objcopy = copy(mainObj);
console.log(objcopy);

objcopy.a = 7;
objcopy.c.x = 25;
console.log(mainObj); // { a: 2, b: 5, c: { x: 25, y: 4 } }. mainObj.a is unchanged. mainObj.c.x is modified. nested object property is copied by reference
console.log(objcopy); // { a: 7, b: 5, c: { x: 25, y: 4 } }

// Test Object cloning with Object.assign
// pitfall: only makes shallow copies. 
let p = {
	a: 1,
	b: {
		c:2
	}
};

let c = Object.assign({},p); // clone p

// modify enumerable property
p.a = 5;
c.a = 10;

console.log(p); // { a: 5, b: { c: 2 } } 
console.log(c); // { a: 10, b: { c: 2 } }

c.b.c = 20; // modify value of nested object in c

// both p and c share the same reference to the object because of individual copies were not made, instead a reference to the object was copied. 
// Any change made to any of the object's property applies to all references using the object.
// Properties on the prototype chain and non-enumerable properties cannot be copied
console.log(p); // { a: 5, b: { c: 20 } }. value of p.b.c is also modified because Object.assign() only makes shallow copies 
console.log(c); // { a: 10, b: { c: 20 } }

// deep copying with JSON.
// This fixes the issue we had earlier. Now newObj.b has a copy and not a reference! 
// pitfall: Unfortunately, this method can't be used to copy user-defined object methods.
let obj = { 
  a: 1,
  b: { 
    c: 2,
  },
}

// newObj has a copy of the nested object and not a reference
let newObj = JSON.parse(JSON.stringify(obj));

obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

// Copying Object methods
obj = {
  name: 'deep end',
  func: function () {
    return true;
  }
};

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1);  // { name: 'deep end', func: [Function: func] }
console.log(method2); // { name: 'deep end' }

