/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var a = [2,3,4];

var big = a.reduceRight(function (accumulator,value) {
    return Math.pow(value,accumulator);
});

console.log("big: " + big);