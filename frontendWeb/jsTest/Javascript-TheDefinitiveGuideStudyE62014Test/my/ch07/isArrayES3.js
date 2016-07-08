/**
 * Created by Allbts-IT on 1/07/2016.
 */
'use strict';

var isArray = Function.isArray || function (o) {
        return typeof o === "object" &&
            Object.prototype.toString.call(o) === "[object Array]";
    };

console.log(isArray([1, 2]));