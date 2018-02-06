var Rx = require('rxjs');
const source1$ = Rx.Observable.of(1,2,3);

const source2$ = Rx.Observable.of('a','b','c');

Rx.Observable.merge(source1$,source2$).subscribe(console.log);