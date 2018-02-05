import Rx from "rxjs/Rx";

const isNumericalKeyCode = code => code >= 48 && code <= 57;

const input = document.querySelector('#input');

Rx.Observable.fromEvent(input, 'keyup')
    .pluck('keyCode')
    .filter(isNumericalKeyCode)
    .subscribe(code => console.log(`User typed:
    ${String.fromCharCode(code)}`));

