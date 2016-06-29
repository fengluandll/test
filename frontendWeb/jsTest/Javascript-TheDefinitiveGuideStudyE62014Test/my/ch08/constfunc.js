// This function returns a function that always returns v
function constfunc(v) { return function() { return v; }; }
// Create an array of constant functions:
var funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs[5]() // => 5