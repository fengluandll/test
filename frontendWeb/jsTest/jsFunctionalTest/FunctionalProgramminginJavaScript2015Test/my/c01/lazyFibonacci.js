var fibonacci2 = Lazy.generate(function () {
    var x = 1;
    return function () {
        var prev = x;
        x = y;
        y += previous;
        return prev;
    };
}());

console.log(fibonacci2.length());