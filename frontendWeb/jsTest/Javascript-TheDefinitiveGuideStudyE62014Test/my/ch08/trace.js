// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
    var original = o[m]; // Remember original method in the closure.
    o[m] = function() { // Now define the new method.
        console.log(new Date(), "Entering:", m); // Log message.
        var result = original.apply(this, arguments); // Invoke original.
        console.log(new Date(), "Exiting:", m); // Log message.
        return result; // Return result.
    };
}

var oo = {
    x:2,
    test: function () {
        console.log('hello,test');
    }
};

trace(oo,'test');
oo.test();