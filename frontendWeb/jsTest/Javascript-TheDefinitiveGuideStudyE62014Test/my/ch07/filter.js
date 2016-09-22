"use strict";

var a = [5,4,3,2,1];

var smallvalues = a.filter(function (x) {
   return x < 3;
});

console.log('smallvalues: ' + smallvalues);

var everyother = a.filter(function (x,i,a) {
   return i % 2 === 0;
});
console.log("everyother: " + everyother);

