var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
console.log(Array.join(a, "+"));
console.log(Array.slice(a, 0));
var upper =
Array.map(a, function(x) { return x.toUpperCase(); });
console.log(upper);