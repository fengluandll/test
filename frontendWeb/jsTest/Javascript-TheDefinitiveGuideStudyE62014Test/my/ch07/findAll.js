/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

function findall(a,x) {
   var result = [],
       len = a.length,
       pos = 0;
    while (pos < len) {
        pos = a.indexOf(x,pos);
        if (pos === -1) break;
        result.push(pos);
        pos = pos + 1;
    }
    return result;
}

var a = [1,2,2,3,3,1];
var results = findall(a,2);
console.log("results: " + results);