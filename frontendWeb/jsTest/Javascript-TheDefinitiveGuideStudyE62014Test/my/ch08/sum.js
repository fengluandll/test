// Return the sum of the elements of array (or array-like object) a.
// The elements of a must all be numbers or null and undefined are ignored.
function sum(a) {
    if (isArrayLike(a)) {
        var total = 0;
        for(var i = 0; i < a.length; i++) { // Loop though all elements
            var element = a[i];
            if (element == null) continue; // Skip null and undefined
            if (isFinite(element)) total += element;
            else throw new Error("sum(): elements must be finite numbers");
        }
        return total;
    }
    else throw new Error("sum(): argument must be array-like");
}

var a = [1,2,3];
console.log(sum(a));;

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
    if (o && // o is not null, undefined, etc.
        typeof o === "object" && // o is an object
        isFinite(o.length) && // o.length is a finite number
        o.length >= 0 && // o.length is non-negative
        o.length===Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296) // o.length < 2^32
        return true; // Then o is array-like
    else
        return false; // Otherwise it is not
}