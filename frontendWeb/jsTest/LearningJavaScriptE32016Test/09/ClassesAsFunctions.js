/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

class Es6Car {} // we'll omit the constructor for brevity
function Es5Car() {}
typeof Es6Car // "function"
typeof Es5Car // "function"

console.log(typeof Es6Car); // "function"
console.log(typeof Es5Car); // "function"