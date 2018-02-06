var arr = [];

for (var i = 0; i < 1000; i++) {
    arr.push(i);
}

var timeStart = Date.now();

var Rx = require('rx');

Rx.Observable.from(arr,null,null, Rx.Scheduler.timeout).subscribe(
    function onNext() {},
    ()=>{},
    ()=>{
        console.log('Total time: ' + (Date.now() - timeStart) + 'ms');
    }
);

console.log('Hi there!');