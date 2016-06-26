/**
 * Created by Allbts-IT on 26/06/2016.
 */
'use strict';

var o1 = Object.create({x:1,y:2, toString:function () {
    return '{x: ' + this.x + ', y: ' + this.y + '}';
}});
// o1.toString = function () {
//     return '{x: ' + this.x + ', y: ' + this.y + '}';
// };
console.log(o1.toString());