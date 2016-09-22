/**
 * Created by Allbts-IT on 22/09/2016.
 */
'use strict';

var objects = [{x:1},{y:2},{z:3}];

var merged = objects.reduce(union);

for (var prop in merged) {
    console.log(prop + ": " + merged[prop]);
}

function extend(o, p) {
    for(var prop in p) {  // For all props in p.
        o[prop] = p[prop];// Add the property to o.
    }
    return o;
}

function union(o,p) { return extend(extend({},o), p); }