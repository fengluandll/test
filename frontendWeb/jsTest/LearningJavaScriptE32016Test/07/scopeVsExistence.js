/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const x = 3;
function f() {
    console.log(x); // this will work
    console.log(y); // this will cause a crash
}

const y = 4;
f();