var fs = require('fs');

var timestamp = new Date().toString();
fs.writeFile('date.txt',timestamp,function (err) {
   if (err) throw err;
   fs.readFile('date.txt',function (err,contents) {
       if (err) {
           throw err;
       }

       console.log('check contents');
       console.log(contents == timestamp);
   });
});

console.log('last line');