const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15

console.log(Math.min.apply(null, arr)); // -5
console.log(Math.max.apply(null, arr));; // 15

Math.min(...arr); // -5
Math.max(...arr); // 15

console.log(Math.min(...arr)); // -5
console.log(Math.max(...arr)); // 15