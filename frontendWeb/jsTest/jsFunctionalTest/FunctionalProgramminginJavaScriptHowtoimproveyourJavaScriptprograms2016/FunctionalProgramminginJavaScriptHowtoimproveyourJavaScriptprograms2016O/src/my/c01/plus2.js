const R = require('ramda');

const run = R.compose;

const increment = counter => counter + 1;

const plus2 = run(increment, increment);
console.log(plus2(0));
