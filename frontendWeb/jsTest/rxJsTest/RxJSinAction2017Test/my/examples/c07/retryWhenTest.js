const Rx = require('rxjs/Rx');

const maxRetries = 3;

Rx.Observable.of(2, 4, 5, 8, 10)
    .map(num => {
        if (num % 2 !== 0) {
            throw new Error(`Unexpected odd number: ${num}`);
        }
        return num;
    })
    .retryWhen(errors =>
        errors.scan(
            (errorCount, err) => {
                if (errorCount >= maxRetries) {
                    throw err;
                }
                return errorCount + 1;
            }, 0)
        )
            .subscribe(
                num => console.log(num),
                err => console.log(err.message)
            );