"use strict";

const EventEmitter = require('events');

class AddEmitter extends EventEmitter{}

const addEmitter = new AddEmitter();

// addEmitter.on('add', (a,b) => {
//     console.log(a + b); //-> Prints 5
// });

const Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(addEmitter, 'add', (a,b) => ({a: a, b: b}))
    .map(input => input.a + input.b)
    .subscribe(console.log);

addEmitter.emit('add',2,3);
