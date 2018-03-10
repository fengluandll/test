var fs = require('fs');
fs.readFile('example.txt','utf8', function (err, contents) {
    if (err) {
        throw err;
    }
    console.log(contents);
});
console.log('hi');
