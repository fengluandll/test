/**
 * Created by Allbts-IT on 29/06/2016.
 */
'use strict';

var scope = "global scope";

function checkscope() {
    var scope = 'local scope';
    function f() {
        return scope;
    }
    return f();
}
console.log(checkscope());

