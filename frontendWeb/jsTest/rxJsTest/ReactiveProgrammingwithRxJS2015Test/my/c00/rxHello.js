var Rx = require('rx');

Rx.Observable.just('Hello,world!').subscribe(function (value) {
   console.log(value);
});

