// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
    if (isFinite(n) && n>0 && n==Math.round(n)) { // Finite, positive ints only
        if (!(n in factorial)) // If no cached result
            factorial[n] = n * factorial(n-1); // Compute and cache it
        return factorial[n]; // Return the cached result
    }
    else return NaN; // If input was bad
}
factorial[1] = 1; // Initialize the cache to hold this base case.

console.log(factorial(3));