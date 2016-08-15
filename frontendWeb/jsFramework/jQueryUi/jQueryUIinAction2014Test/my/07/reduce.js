/**
 * Created by Allbts-IT on 12/08/2016.
 */
'use strict';

var a = [1,2,3,4,5];

var sum = a.reduce(function (x,y) {
    return x+y;
},0);

console.log('sum= ' + sum);