console.log(Number.isSafeInteger(156));  //true
console.log(Number.isSafeInteger('1212'));  //false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));//true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); //false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); //true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); //false