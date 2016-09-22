/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var data = [1,2,3,4,5];

var sum = 0;
data.forEach(function (value) {
    sum += value;
});

console.log('sum: ' + sum);

data.forEach(function (v,i,a) {
   a[i] = v + 1;
});

console.log("data: " + data);