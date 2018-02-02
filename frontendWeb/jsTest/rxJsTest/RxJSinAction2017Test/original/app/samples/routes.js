/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

"use strict";
var express = require('express');
var router = express.Router();

//Chapter Samples
router.use('/ch04', require('./ch04/stock-server'));
router.use('/ch06', require('./ch06/routes'));


module.exports = router;