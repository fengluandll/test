/**
 * Created by Allbts-IT on 1/07/2016.
 */
'use strict';

var s = 'JavaScript';

console.log(Array.prototype.join.call(s, ' ')); // => "J a v a S c r i p t"
var str =
    Array.prototype.filter.call(s,function (x) {
        return x.match(/[^aeiou]/);
    }).join('');  // => "JvScrpt"

console.log(str);

