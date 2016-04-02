/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x); // logs 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x is not defined