'use strict';

var Rx = require('rxjs');
var source1$ = Rx.Observable.of(1, 2, 3);

var source2$ = Rx.Observable.of('a', 'b', 'c');

Rx.Observable.merge(source1$, source2$).subscribe(console.log);
//# sourceMappingURL=mergeSync.js.map