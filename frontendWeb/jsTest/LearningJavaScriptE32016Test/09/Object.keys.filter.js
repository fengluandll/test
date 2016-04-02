/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };

Object.keys(o)
    .filter(prop => prop.match(/^x/)).
    forEach(prop => console.log(`${prop} : ${o[prop]}`));