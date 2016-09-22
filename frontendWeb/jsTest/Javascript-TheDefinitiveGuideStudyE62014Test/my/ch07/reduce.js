/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var a = [1,2,3,4,5];

var sum = a.reduce(function (x,y) {
    return x+y;
},0);

console.log("sum: " + sum);

var product = a.reduce(function (x,y) {
    return x*y;
},1);
console.log("product: " + product);

var max = a.reduce(function (x,y) {
    return (x>y)?x:y;
});
console.log("max: " + max);