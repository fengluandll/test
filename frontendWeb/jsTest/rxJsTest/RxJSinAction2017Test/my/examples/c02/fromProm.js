const Rx = require('rxjs/Rx');

const fortyTwo = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(42);
    }, 5000);
});

Rx.Observable.fromPromise(fortyTwo)
.map(next => next + 1)
.subscribe(console.log);

console.log('Program terminated');