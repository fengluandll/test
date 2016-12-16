import http = require('http');
import ServerMain = require('./ServerMain');
var port = process.env.port || 1337;
//http.createServer(ServerMain.processRequest).listen(port);
//http.createServer(ServerMain.processRequestReadFromFileAnonymous).listen(port);
http.createServer(ServerMain.processRequestReadFromFileChained).listen(port);
