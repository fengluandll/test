// "use strict";

function myFunction(a,b) {
    return a + b;
}

var data = [1,4];
var result = myFunction.apply(null,data);

console.log(result);