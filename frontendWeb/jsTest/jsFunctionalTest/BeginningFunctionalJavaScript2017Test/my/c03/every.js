const every = (arr, fn) => {
    let result = true;
    for (const value of arr) {
        result = result && fn(value);
    }
    return result;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN))