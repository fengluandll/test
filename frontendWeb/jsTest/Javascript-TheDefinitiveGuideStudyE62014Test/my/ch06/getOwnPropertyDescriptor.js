// Returns {value: 1, writable:true, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor({x: 1}, "x"));

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() { return Math.floor(Math.random()*65536); },
    get int16() { return Math.floor(Math.random()*65536)-32768; }
};
// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

// Returns undefined for inherited properties and properties that don't exist.
console.log(Object.getOwnPropertyDescriptor({}, "x"));; // undefined, no such prop
console.log(Object.getOwnPropertyDescriptor({}, "toString"));; // undefined, inherited