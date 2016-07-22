// This function uses arguments.callee, so it won't work in strict mode.
function check(args) {
    var actual = args.length; // The actual number of arguments
    var expected = args.callee.length; // The expected number of arguments
    if (actual !== expected) // Throw an exception if they differ.
        throw Error("Expected " + expected + "args; got " + actual);
}
function f(x, y, z) {
    check(arguments); // Check that the actual # of args matches expected #.
    return x + y + z; // Now do the rest of the function normally.
}

f(1,2,3);