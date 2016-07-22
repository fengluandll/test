function flexisum(a) {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        var element = arguments[i], n;
        if (element == null) continue; // Ignore null and undefined arguments
        if (isArray(element)) // If the argument is an array
            n = flexisum.apply(this, element); // compute its sum recursively
        else if (typeof element === "function") // Else if it's a function...
            n = Number(element()); // invoke it and convert.
        else n = Number(element); // Else try to convert it
        if (isNaN(n)) // If we couldn't convert to a number, throw an error
            throw Error("flexisum(): can't convert " + element + " to number");
        total += n; // Otherwise, add n to the total
    }
    return total;
}