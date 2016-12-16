import http = require('http');
export function processRequest(
    req: http.ServerRequest,
    res: http.ServerResponse): void
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}

//export class ServerMain {
//    static processRequest(req : http.ServerRequest, res : http.ServerResponse) : void {
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('Hello World\n');
//    }

//}





import fs = require("fs");
export function processRequestReadFromFileAnonymous(req: http.ServerRequest, res: http.ServerResponse) {
    fs.readFile('server.js', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (err)
            res.write("could not open file for reading");
        else {
            res.write(data);
            res.end();
        }
    });
}

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


export function processRequestReadFromFileChained(
    req: http.ServerRequest, res: http.ServerResponse) {
    fs.readFile('server.js', 'utf8', (err, data) => {
        writeFileToStream(err, data, res);
    });
}

function writeFileToStream(
    err: ErrnoException, data: any, res: http.ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (err)
        res.write("could not open file for reading");
    else {
        res.write(data);
        res.end();
    }
}
