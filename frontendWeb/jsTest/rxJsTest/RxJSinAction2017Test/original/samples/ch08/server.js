var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer();
server.listen(1337);

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

	connection.sendUTF(JSON.stringify({ msg:'Hello Socket' }));

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        //console.log('Message received: '  + JSON.parse(message));            
    });

    connection.on('close', function(connection) {
        // close user connection
    });
});