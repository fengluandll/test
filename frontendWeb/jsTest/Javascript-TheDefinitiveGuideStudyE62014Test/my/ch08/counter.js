/**
 * Created by Allbts-IT on 29/06/2016.
 */
'use strict';

function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}
var c = counter(), d = counter(); // Create two counters
console.log(c.count()); // => 0
console.log(d.count()); // => 0: they count independently
c.reset() // reset() and count() methods share state
console.log(c.count()); // => 0: because we reset c
console.log(d.count()); // => 1: d was not reset