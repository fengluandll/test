const Rx = require('rxjs/Rx');
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');

Rx.Observable.from(map).forEach(console.log);