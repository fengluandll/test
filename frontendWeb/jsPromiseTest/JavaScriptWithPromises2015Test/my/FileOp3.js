var fs = require('fs');

var timestamp = new Date().toString();
var contents;
fs.writeFile('date.txt',timestamp);

fs.readFile('date.txt',function (err,data) {
   if(err) throw err;
   contents = data;
});

console.log('compare');
console.assert(timestamp == contents);