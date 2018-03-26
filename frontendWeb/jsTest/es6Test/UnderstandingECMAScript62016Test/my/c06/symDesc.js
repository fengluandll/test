let firstName = Symbol('first name');
let person = {};
person[firstName] = 'Yun';
console.log('first name' in person);
console.log(person[firstName]);
console.log(firstName);