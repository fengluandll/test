var Rx = require('rxjs');

const original = [1,2,3];

Rx.Observable.from(original)
    .filter(x => {
        console.log(`filtering ${x}`);
        return x % 2 !== 0;
    })
    .map(x =>{
        console.log(`mapping ${x}`);

        return x * x;
    });

