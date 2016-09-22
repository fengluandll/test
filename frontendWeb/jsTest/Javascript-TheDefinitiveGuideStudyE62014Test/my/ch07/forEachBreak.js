/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

function foreach(a,f,t) {
    try {
        a.forEach(f, t);
    } catch (e) {
        if (e == foreach.break) return;
        else throw e;
    }
}

foreach.break = new Error("StopIteration");

var a = [1,2,-1,3];
var sum = 0;
foreach(a,function (v) {
    if (v < 0){
        throw foreach.break;
    }else{
        sum += v;
    }
});

console.log("sum: " + sum);