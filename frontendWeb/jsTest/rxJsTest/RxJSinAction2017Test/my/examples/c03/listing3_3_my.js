var Rx = require('rxjs');

const progressBar$ = Rx.Observable.create(
    observer => {
        const OFFSET = 3000;
        const SPEED = 50;

        let val = 0;
        let timeoutId = 0;

        function progress() {
            if (++val <= 100){
                observer.next(val);
                timeoutId = setTimeout(progress, SPEED);
                console.log(`val: ${val}, timeoutId: ${timeoutId}`);
            }else {
                observer.complete();
            }
        }

        timeoutId = setTimeout(progress, OFFSET);
        console.log(`start time id: ${timeoutId}`);

        return () => {
            clearTimeout(timeoutId);
        };
    }
);

progressBar$.subscribe(console.log);