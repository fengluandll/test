let firstName = Symbol("first name");

let person = {
  [firstName]: 'Yun'
};

Object.defineProperty(person,firstName, {writable: false});

let lastName = Symbol('last name');

Object.defineProperties(person, {
    [lastName]: {
        value: 'Zhang',
        writable: false
    }
});

console.log(person[firstName]);
console.log(person[lastName]);
