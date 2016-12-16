function processRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}
exports.processRequest = processRequest;
//export class ServerMain {
//    static processRequest(req : http.ServerRequest, res : http.ServerResponse) : void {
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('Hello World\n');
//    }
//}
var fs = require("fs");
function processRequestReadFromFileAnonymous(req, res) {
    fs.readFile('server.js', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (err)
            res.write("could not open file for reading");
        else {
            res.write(data);
            res.end();
        }
    });
}
exports.processRequestReadFromFileAnonymous = processRequestReadFromFileAnonymous;
//export function processRequestReadFromFileError(req: http.ServerRequest, res: http.ServerResponse) {
//    fs.readFile('server.js', 'utf8', writeFileToStreamError);
//}
//function writeFileToStreamError(err, data) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    if (err)
//        res.write("could not open file for reading");
//    else {
//        res.write(data);
//        res.end();
//    }
//}
function processRequestReadFromFileChained(req, res) {
    fs.readFile('server.js', 'utf8', function (err, data) {
        writeFileToStream(err, data, res);
    });
}
exports.processRequestReadFromFileChained = processRequestReadFromFileChained;
function writeFileToStream(err, data, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (err)
        res.write("could not open file for reading");
    else {
        res.write(data);
        res.end();
    }
}
//# sourceMappingURL=ServerMain.js.map