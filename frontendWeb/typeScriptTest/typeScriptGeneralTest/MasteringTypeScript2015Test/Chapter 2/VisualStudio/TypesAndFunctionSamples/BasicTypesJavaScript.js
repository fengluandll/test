var myString = "";
var myNumber = 1;
var myBoolean = true;

mystring = myNumber;
myBoolean = myString;
myNumber = myBoolean;


function addNumbers(a, b) {
    return a + b;
}

var result = addNumbers(1, 2);
var result2 = addNumbers("1", "2");

var vAddVar = function (a, b) {
    return a + b;
}

var result = vAddVar(1, 2);
