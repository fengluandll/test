"use strict";
/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
var express = require('express');
var router = express.Router();
var rp = require('request-promise');


router.get('/stock-server/:symbol', (req, res) => {

    const symbol = req.params.symbol;

    rp.get(`http://finance.yahoo.com/webservice/v1/symbols/${symbol}/usd/quote?format=json`)
        .then((body) => {
            res.send(body);
        });

});

const users = [
    {
        accountNum : 4111111111111111,
        name: 'Joe Doe',
        openedOn: '',
        type: 'checking'
    },
    {
        accountNum: 5105105105105100,
        name: 'Susane Doe',
        openedOn: '',
        type: 'checking'
    },
    {
        accountNum: 4342561111111118,
        name: 'Joe Doe Savings',
        openedOn: '',
        type: 'savings'
    },
    {
        accountNum: 6500000000000002,
        name: 'Joe Doe CD',
        openedOn: '',
        type: 'savings'
    }
];

router.get('/users/', (req, res) => {

    var query = decodeURIComponent(req.query.name);

    if (query) {
        res.send(users.filter(u => u.name == query));
    } else {
        res.send(users);
    }
});

module.exports = router;