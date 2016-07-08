var factorial = function (x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x-1);
};

console.log(factorial(3));

var fact = function (x) {
    if (x <= 1) return 1;
    return x * fact(x-1);
}

console.log(fact(3));