var Rx = require('rxjs/Rx');

Rx.Observable.of(2, 4, 5, 8, 10)
    .map(num => {
        if (num % 2 !== 0) {
            throw new Error(`Unexpected odd number: ${num}`);
        }
        return num;
    }).retry(3)
    .catch(err$ => Rx.Observable.of(6))
    .subscribe(
        num => console.log(num),
        err => console.log(err.message)
    );