function* generator_function() {
    var a = yield 12;
    var b = yield a + 1;
    var c = yield b + 2;
    yield c + 3;
}

var generator = generator_function();

console.log(generator.next().value);
console.log(generator.next(5).value);
console.log(generator.next(11).value);
console.log(generator.next(78).value);
console.log(generator.next().done);