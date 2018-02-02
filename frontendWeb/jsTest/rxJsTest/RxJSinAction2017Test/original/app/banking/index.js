/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
"use strict";

var express = require('express');
var Rx = require('@reactivex/rxjs');
var router = express.Router();

var requestSubject = new Rx.Subject();
var requestSource = requestSubject.groupBy(x => x.token);

function responseHandler(token) {
    return function(source) {
        return source
            .filter(x => x.key === token)
            .mergeAll()
            .take(1)
    }
}

router.get('/accounts/:id', (req, res) => {
    var id = req.params['id'];
    console.log("Got id: " + id);
    res.sendStatus(200);
});

router.post('/v1/requestToken', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(`got Email: ${email}, Password: ${password}`);
    res.send({token: email + password});

});

router.post('/v1/dologin', (req, res) => {
    var token = req.body.token;
    console.log('Storing: ' + token);

    requestSource
        .let(responseHandler(token))
        .subscribe(x => res.send({token: 'dfajeaajdkfl;aewf'}));
});

router.post('/v1/verifyLogin', (req, res) => {
    var verifyToken = req.body.verifyToken;
    console.log(`Verifying log in for ${verifyToken}`);
    requestSubject.next({token: vToken});
    res.sendStatus(200);
});



module.exports = router;