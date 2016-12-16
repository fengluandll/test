
// Basic function
function addNumbers(a, b) {
    return a + b;
}

var result = addNumbers(1, 2);
var result2 = addNumbers("1", "2");

// Anonymous function
var addVar = function (a, b) {
    return a + b;
};

var result = addVar(1, 2);

// Optional parameters
var concatStrings = function (a, b, c) {
    return a + b + c;
}

console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));

// The arguments variable
function testParams() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            console.log("Argument " + i + " = " + arguments[i]);
        }
    }
}

testParams(1, 2, 3, 4);
testParams("first argument");


// Callback functions
function myCallBack(text) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText, callback) {
    console.log("inside CallingFunction");
    callback(initialText);
}

callingFunction("myText", myCallBack);
callingFunction("myText", "this is not a function");


// Function overloads
function add(x, y) {
    return x + y;
}

console.log("add(1,1)=" + add(1, 1));
console.log("add('1','1')=" + add("1", "1"));
console.log("add(true,false)=" + add(true, false));

