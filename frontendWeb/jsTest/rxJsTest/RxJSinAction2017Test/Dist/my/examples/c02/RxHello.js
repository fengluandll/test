'use strict';

var Rx = require('rxjs');

var source$ = Rx.Observable.create(function (observer) {
    observer.next('4111111111111111');
    observer.next('5105105105105100');
    observer.next('4342561111111118');
    observer.next('6500000000000002');
    observer.complete();
});

var subscription = source$.subscribe(console.log);
//# sourceMappingURL=RxHello.js.map