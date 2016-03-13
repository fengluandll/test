var o = { x: 1 }
console.log(o.hasOwnProperty("x")); // true: o has an own property x
console.log(o.hasOwnProperty("y")); // false: o doesn't have a property y
console.log(o.hasOwnProperty("toString")); // false: toString is an inherited property