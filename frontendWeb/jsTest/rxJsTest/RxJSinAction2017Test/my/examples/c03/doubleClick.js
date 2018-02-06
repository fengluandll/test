
// console.log('*****');

let sinceLast = new Date();

Rx.Observable.fromEvent(document, 'mouseup')
.filter(e => {
    let timeElapsed = new Date() - sinceLast;
    sinceLast = new Date();
    // console.log('filter');
    return timeElapsed < 300;
}).subscribe(()=> console.log('double clicked'));