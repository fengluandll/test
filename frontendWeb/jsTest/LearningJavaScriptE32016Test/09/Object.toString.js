/**
 * Created by Allbts-IT on 5/04/2016.
 */
'use strict';

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(make,model){
        super();
        this.make = make;
        this.model = model;
        this.vin = Car.vin++;
    }

    toString(){
        return `${make} ${this.model}: ${this.vin}`;
    }

    deployAirbags() {
        console.log("BWOOSH!");
    }
}

Car.vin = 0;

console.log(new Car('Honda','King'));
console.log(new Car('Honda','Queen'));