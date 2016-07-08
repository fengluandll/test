/**
 * Created by Allbts-IT on 1/07/2016.
 */
'use strict';

var a = {};

var i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;

var total = 0;
for (var j = 0 ; j < a.length ; j++) {
    total += a[j];
}

console.log('total: ' + total);