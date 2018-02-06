'use strict';

// console.log('*****');

var sinceLast = new Date();

Rx.Observable.fromEvent(document, 'mouseup').filter(function (e) {
    var timeElapsed = new Date() - sinceLast;
    sinceLast = new Date();
    // console.log('filter');
    return timeElapsed < 300;
}).subscribe(function () {
    return console.log('double clicked');
});
//# sourceMappingURL=doubleClick.js.map