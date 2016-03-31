"use strict";

const Car = (function() {
    const carProps = new WeakMap();
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }
        get userGear() { return carProps.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;
        }
        shift(gear) { this.userGear = gear; }
    }
    return Car;
})();

const car1 = new Car("Tesla", "Model S");

console.log(car1);

console.log(car1 instanceof Car); // true
console.log(car1 instanceof Array); // false

console.log(`userGear ${car1.userGear}`);

const arr5 = new Array(); // empty array
const arr6 = new Array(1, 2, 3); // [1, 2, 3]
const arr7 = new Array(2); // array of length 2 (all elements undefined)
const arr8 = new Array("2"); // ["2"]