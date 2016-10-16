var p = {x:1}; // Define a prototype object.
var o = Object.create(p); // Create an object with that prototype.
console.log(p.isPrototypeOf(o)); // => true: o inherits from p
console.log(Object.prototype.isPrototypeOf(o)); // => true: p inherits from Object.prototype