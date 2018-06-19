let obj = {a: 12};
let s1 = Symbol("my");
let s2 = Symbol("your");

Object.defineProperty(obj,s1,{enumerable: false});
obj[s2]="";
console.log(Object.getOwnPropertySymbols(obj)); //> [ Symbol(your) ]