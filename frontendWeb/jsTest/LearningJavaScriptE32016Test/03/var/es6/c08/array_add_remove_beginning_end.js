const arr = ["b", "c", "d"];
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
console.log(arr);
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
console.log(arr);
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
console.log(arr);
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
console.log(arr);