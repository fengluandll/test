var x = {x:12};

var y = Object.create(x,{y:{value:13}});
console.log(y.x);
console.log(y.y);