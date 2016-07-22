function f(y) { return this.x + y; } // This function needs to be bound
var o = { x : 1 }; // An object we'll bind to
var g = f.bind(o); // Calling g(x) invokes o.f(x)
g(2) // => 3


console.log(g(2));