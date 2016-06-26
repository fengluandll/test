/**
 * Created by Allbts-IT on 26/06/2016.
 */
'use strict';

function inherit(p) {
    if (p == null) throw TypeError;
    if (Object.create){
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t != 'function')
        throw TypeError();

    function f() {
        
    };

    f.prototype = p;

    return new f();
}

var y = {x:2,toString: function () {
    return "x = " + this.x;
}};

var x = inherit(y);
// x.toString = function () {
//     return "x = " + x;
// };
x.x=3;
console.log(y);