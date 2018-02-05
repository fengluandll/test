
var Rx = require('rxjs');

const source$ = Rx.Observable.create(observer => {
    observer.next('4111111111111111');
    observer.next('5105105105105100');
    observer.next('4342561111111118');
    observer.next('6500000000000002');
    observer.complete();
});

const subscription = source$.subscribe(console.log);