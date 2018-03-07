const link = document.querySelector('#google');

Rx.Observable.fromEvent(link,'click')
.map(event => event.currentTarget.getAttribute('href'))
.subscribe(console.log);