/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

let globalFunc; // undefined global function
{
    let blockVar = 'a'; // block-scoped variable
    globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc(); // logs "a"

