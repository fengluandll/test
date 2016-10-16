function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classof(null)); // => "Null"
console.log(classof(1)); // => "Number"
console.log(classof("")); // => "String"
console.log(classof(false)); // => "Boolean"
console.log(classof({})); // => "Object"
console.log(classof([])); // => "Array"
console.log(classof(/./)); // => "Regexp"
console.log(classof(new Date())); // => "Date"
console.log(classof(window)); // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
console.log(classof(new f()));; // => "Object"