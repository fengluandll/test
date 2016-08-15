/**
 * Created by Allbts-IT on 12/08/2016.
 */
'use strict';

function classof(o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classof(null));

console.log(classof(undefined));

console.log(classof({}));