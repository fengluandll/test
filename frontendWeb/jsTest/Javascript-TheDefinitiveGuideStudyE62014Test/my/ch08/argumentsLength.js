function f(x,y,z) {
    if (arguments.length != 3) {
        throw new Error("function f called with " + arguments.length +
            "arguments, but it expects 3 arguments.")
    }
}

f(1,2);