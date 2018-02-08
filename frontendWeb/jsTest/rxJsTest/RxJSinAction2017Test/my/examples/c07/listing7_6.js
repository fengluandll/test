var Rx = require('rxjs');

const computeHalf = x => Math.floor(x / 2);

Rx.Observable.of(2,4,5,8,10)
.map(num =>{
    if (num % 2 !== 0) {
        throw new Error(`Unexpected odd number: ${num}`);
    }
    return num;
})
    .catch(err => Rx.Observable.of(6))
.map(computeHalf)
.subscribe(
    next => console.log(next),
    error => console.log(`Caught: ${error}`),
    () => console.log('All done!'));