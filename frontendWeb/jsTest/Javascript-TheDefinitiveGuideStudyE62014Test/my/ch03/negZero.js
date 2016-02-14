var zero = 0; // Regular zero
var negz = -0; // Negative zero
var a = zero === negz // => true: zero and negative zero are equal
console.log(a);
var b = 1 / zero === 1 / negz // => false: infinity and -infinity are not equal
console.log(b);