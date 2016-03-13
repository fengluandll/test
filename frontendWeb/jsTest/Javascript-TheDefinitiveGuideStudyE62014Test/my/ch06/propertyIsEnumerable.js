function inherit(parent){
    var o = new Object();
    o.prototype = parent;
    return o;
}

var o = inherit({ y: 2 });
o.x = 1;
console.log(o.propertyIsEnumerable("x")); // true: o has an own enumerable property x
console.log(o.propertyIsEnumerable("y")); // false: y is inherited, not own
console.log(Object.prototype.propertyIsEnumerable("toString")); // false: not enumerable