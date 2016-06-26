/**
 * Created by Allbts-IT on 25/06/2016.
 */
'use strict';

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (isNaN(x)){
        throw Error('x must be a number');
    }
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

I
