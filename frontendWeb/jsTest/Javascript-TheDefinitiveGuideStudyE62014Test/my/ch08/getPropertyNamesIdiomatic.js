// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, /* optional */ a) {
    a = a || [];
    for(var property in o) a.push(property);
    return a;
}
// This function can be invoked with 1 or 2 arguments:
var o = {a:3,b:2,c:8};
var a = getPropertyNames(o); // Get o's properties into a new array
console.log(a);

var p = {d:'b',e:'f'};
getPropertyNames(p,a); // append p's properties to that array
console.log(a);

