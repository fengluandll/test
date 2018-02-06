'use strict';

var Rx = require('rxjs');

var source1$ = Rx.Observable.interval(1000).map(function (x) {
    return 'Source 1 ' + x;
}).take(3);

var source2$ = Rx.Observable.interval(1000).map(function (y) {
    return 'Source 2 ' + y;
}).take(3);

Rx.Observable.merge(source1$, source2$).subscribe(console.log);
//# sourceMappingURL=mergeHello.js.map