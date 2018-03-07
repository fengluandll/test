const Rx = require('rxjs/Rx');

Rx.Observable.from([1,2,3]).subscribe(console.log);
Rx.Observable.from('RxJS').subscribe(console.log);