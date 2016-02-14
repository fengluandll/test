var o1 = Object.create({x: 1, y: 2});
console.log(o1.x + ',' + o1.y);

var o2 = Object.create(null);

var o3 = Object.create(Object.prototype);

var date = new Date();
var typeOfDate = typeof date;
console.log("typeOfDate = " + typeOfDate);
