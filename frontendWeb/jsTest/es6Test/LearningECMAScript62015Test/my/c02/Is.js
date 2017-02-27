console.log(Object.is(0, -0));//false
console.log(0 === -0);//true
console.log(Object.is(NaN, 0 / 0));//true
console.log(NaN === 0 / 0); //false
console.log(Object.is(NaN,NaN));//true
console.log(NaN === NaN); //falseset