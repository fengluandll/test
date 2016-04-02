/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, SYM: 4 };

Object.keys(o).forEach(prop => console.log(`${prop}:${o[prop]}`));