"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = rxjs_1.of(1, 2, 3, 4, 5);
var subscribe = source.subscribe(function (value) { return console.log(value); });
