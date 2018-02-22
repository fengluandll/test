var Rx = require('rxjs');

const source1$ = Rx.Observable.range(1,3).delay(3000);

const source2$ = Rx.Observable.of('a','b','c');

const result = Rx.Observable.concat(source1$, source2$);

result.subscribe(console.log);