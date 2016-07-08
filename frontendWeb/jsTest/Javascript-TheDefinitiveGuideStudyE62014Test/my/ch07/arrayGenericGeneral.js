Array.join = Array.join || function (a, sep) {
        return Array.prototype.join.call(a,sep);
    };

Array.slice = Array.slice || function(a,from,to) {
        return Array.prototype.slice.call(a,from,to);
    };
Array.map = Array.map || function(a, f, thisArg) {
        return Array.prototype.map.call(a, f, thisArg);
    }

var a = {"0": "a", "1": "b", "2": "c", length: 3}; // An array-like object
console.log(Array.join(a, "+"));
console.log(Array.slice(a, 0));
var upper =
    Array.map(a, function (x) {
        return x.toUpperCase();
    });
console.log(upper);