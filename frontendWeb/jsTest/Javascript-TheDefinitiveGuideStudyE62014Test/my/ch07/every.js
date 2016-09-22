"use strict";

var a = [5,4,3,2,1];

var less10 = a.every(function (x) {
   return x < 10;
});

console.log("less10: " + less10);

var even = a.every(function (x) {
    return x % 2 === 0;
});

console.log("even: " + even);

