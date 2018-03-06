var Rx = require('rxjs/Rx');

Rx.Observable.of(2,4,5,8,10)
.map(num => {
    if (num % 2 !== 0) {
        throw new Error(`Unexpected odd number: ${num}`);
    }
    return num;
}).retry(3)
.subscribe(
    num => console.log(num),
    err => console.log(err.message)
);