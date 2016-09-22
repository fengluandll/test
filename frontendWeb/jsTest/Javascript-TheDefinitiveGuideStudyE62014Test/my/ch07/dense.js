/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var sparse = [1,"a",,3,4]; //sparse array
console.log("sparse.length: " + sparse.length);

var dense = sparse.filter(function () {
    return true;
});

console.log("dense.length: " + dense.length);