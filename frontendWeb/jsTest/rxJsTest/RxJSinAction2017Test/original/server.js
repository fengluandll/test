"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

//APIs

var banking = require('./app/banking');
var samples = require('./app/samples/routes');


app.use('/api/banking', banking);
app.use('/api/samples', samples);

app.use('/samples', express.static(__dirname + '/samples'));

app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/banking-in-action/web/login.html');
});

app.get('/verify', (req, res) => {
    res.sendFile(__dirname + '/banking-in-action/web/verify.html');
});

app.use('/', express.static(__dirname + '/banking-in-action/web'));

app.listen(3000, function() {
    console.log('RxJS in Action is go!');
});