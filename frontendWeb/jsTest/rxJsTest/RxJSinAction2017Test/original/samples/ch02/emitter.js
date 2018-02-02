
"use strict";

const EventEmitter = require('events'); //#A

class AddEmitter extends EventEmitter {} // #B 

const addEmitter = new AddEmitter();

addEmitter.on('add', (a, b) => { //#C
  console.log(a + b); //-> Prints 5 
});

addEmitter.emit('add', 2, 3);

const Rx = require('rxjs-es/Rx');

