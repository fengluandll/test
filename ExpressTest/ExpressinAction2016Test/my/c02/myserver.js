var http = require('http');

function requestHandler(request,response) {
    console.log('request to: ' + request.url);
    response.end('hello,node');
}

var server = http.createServer(requestHandler);

server.listen(3000);