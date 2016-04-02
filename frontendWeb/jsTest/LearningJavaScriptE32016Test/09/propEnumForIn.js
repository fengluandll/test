/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, SYM: 4 };
for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}