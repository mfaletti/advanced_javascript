// another way of composing this wiht parasitic pattern
function gizmo2(id, name) {
	return {
		id: id,
		name:name,
		toString: function() {
			return this.name + this.id
		}
	}
}

function hoozit2(id, name) {
	var that = new gizmo2(id, name); // creates a gizmo2 object and transforms it into a hoozit2 object via parasitic construction
	that.test = function(id) {
		return this.id === id;
	}

	return that;
}

var h2 = new hoozit2(2, "hoozit");
console.log(h2.toString());
console.log(h2);
console.log(h2.test(2));
console.log(h2.id);