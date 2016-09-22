/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var a = [1,2,3,4,5];

var someEven = a.some(function (x) {
   return x % 2 === 0;
});

console.log("someEven: " + someEven);

var someNaN = a.some(isNaN);
console.log("someNaN: " + someNaN);