var o = { // An object o.
    m: function() { // Method m of the object.
        var self = this; // Save the this value in a variable.
        console.log(this === o); // Prints "true": this is the object o.
        f(); // Now call the helper function f().
        function f() { // A nested function f
            console.log(this === o); // "false": this is global or undefined
            console.log(self === o); // "true": self is the outer this value.
        }
    }
};
o.m(); // Invoke the method m on the object o.