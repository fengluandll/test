var http = require('http');

http.createServer(function (request,res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('Hello,http');
}).listen(3000);

console.log('listening on 3000');