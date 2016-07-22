var F = function () {
    
};

var p = F.prototype;

var c = p.constructor;

console.log(c === F);

var o = new F();
console.log(o.constructor === F);