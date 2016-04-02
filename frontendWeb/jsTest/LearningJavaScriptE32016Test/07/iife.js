/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const f = (function () {
    let count = 0;
    return function () {
      return `I have been called ${++count} time(s).`;
    };
})();

console.log(f());
console.log(f());

