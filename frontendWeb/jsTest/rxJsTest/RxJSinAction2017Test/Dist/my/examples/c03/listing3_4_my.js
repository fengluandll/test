'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNumericalKeyCode = function isNumericalKeyCode(code) {
    return code >= 48 && code <= 57;
};

var input = document.querySelector('#input');

_Rx2.default.Observable.fromEvent(input, 'keyup').pluck('keyCode').filter(isNumericalKeyCode).subscribe(function (code) {
    return console.log('User typed:\n    ' + String.fromCharCode(code));
});
//# sourceMappingURL=listing3_4_my.js.map