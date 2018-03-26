var map = Object.create(null),
    key1 = {},
    key2 = {name:'test'};

map[key1] = 'foo';

console.log(map[key2]);
console.log(key2.toString());