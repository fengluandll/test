const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; }
}

console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak);
console.log(speak.this);
console.log(speak());;