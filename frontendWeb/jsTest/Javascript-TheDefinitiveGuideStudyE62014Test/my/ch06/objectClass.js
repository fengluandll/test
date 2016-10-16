var o = {x:1};

console.log(Object.prototype.toString.call(o));

var d = new Date();
console.log(Object.prototype.toString.call(o).slice(8,-1));