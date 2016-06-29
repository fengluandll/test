/**
 * Created by Allbts-IT on 29/06/2016.
 */
'use strict';

var uniqueInteger = (function() { // Define and invoke
    var counter = 0; // Private state of function below
    return function() { return counter++; };
}());
for (var i = 0; i < 10; i++) {
    console.log(uniqueInteger());
}


