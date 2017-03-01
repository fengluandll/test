var fs = require('fs');
var time = new Date().toString();

var contents;

fs.writeFileSync('data.txt',time);
contents = fs.readFileSync('data.txt');
console.log('check contents');

console.assert(contents == time);

console.log('last line');