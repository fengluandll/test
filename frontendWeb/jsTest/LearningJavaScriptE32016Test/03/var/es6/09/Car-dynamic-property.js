"use strict";

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }
    get userGear() { return this._userGear; }
    set userGear(value) {
        if(this._userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = vaule;
    }
    shift(gear) { this.userGear = gear; }
}

const car1 = new Car("Tesla", "Model S");

console.log(car1);

console.log(car1 instanceof Car); // true
console.log(car1 instanceof Array); // false

console.log(`userGear ${car1.userGear}`);