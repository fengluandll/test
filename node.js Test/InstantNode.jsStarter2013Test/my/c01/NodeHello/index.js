/**
 * Created by YunZhang on 18/8/17.
 */
var http = require('http');
var server = http.createServer();

server.on('request',function (req,res) {
   res.writeHead(200,{'content-type': 'text/plain'});
   res.write("hello, node");
   res.end();
});

var port = 8085;
server.listen(port);
server.once('listening',function () {
    console.log("Listening on %d",port);
});
