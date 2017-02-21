function square(x, y) {
    if (x === void 0) { x = 0; }
    if (y) {
        return x * y;
    }
    else {
        return x * x;
    }
}
console.log(square(4)); //16
console.log(square(4, 5)); //20
