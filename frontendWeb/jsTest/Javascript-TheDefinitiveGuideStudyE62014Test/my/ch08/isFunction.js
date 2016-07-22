function isFunction(x) {
    return Object.prototype.toString.call(x) === "[object Function]";
}

var a = {};
var b = function () {

};

console.log(isFunction(a));
console.log(isFunction(b));