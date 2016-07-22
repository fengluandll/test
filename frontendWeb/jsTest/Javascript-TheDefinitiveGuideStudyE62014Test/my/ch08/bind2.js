// Return a function that invokes f as a method of o, passing all its arguments.
function bind(f, o) {
    if (f.bind) return f.bind(o); // Use the bind method, if there is one
    else return function() { // Otherwise, bind it like this
        return f.apply(o, arguments);
    };
}

function helloTest() {
    console.log('x = ' + this.x);
}

var o = {x:2};

var bound = bind(helloTest,o);
bound();

