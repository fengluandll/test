var net = require('net');

var server = net.createServer(function (socket) {
    console.log('connection from ' + socket.remoteAddress);
    socket.end('hello,tcp\n');
});

server.listen(7000,'localhost');

console.log('running tcp');