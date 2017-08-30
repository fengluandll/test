var express = require('express');

var http = require('http');

var app = express();

app.use(function (request,response) {
    console.log('request to: ' + request.url);
    response.end('hello');
});

http.createServer(app).listen(3000);