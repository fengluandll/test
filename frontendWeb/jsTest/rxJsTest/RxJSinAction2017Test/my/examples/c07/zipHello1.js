const Rx = require('rxjs/Rx');
const s1$ = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
const s2$ = Rx.Observable.of('a', 'b', 'c', 'd', 'e');

Rx.Observable.zip(s1$,s2$).subscribe(console.log);
console.log('-'.repeat(20));
Rx.Observable.combineLatest(s1$,s2$).subscribe(console.log);