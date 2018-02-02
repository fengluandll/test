/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

"use strict";
var express = require('express');
var router = express.Router();

router.get('/1/emailVerified/:hash', (req, res) => {
    res.sendStatus(200);
});

router.post('/1/sendEmail', (req, res) => {
    res.sendStatus(200);
});

router.get('/1/isVerified', (req, res) => {

});


module.exports = router;