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
    constructor(){
        super();
        console.log("Car created");
    }

    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);; // ["Frank", "Judy"]
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);; // ["Alice", "Cameron"]
//v.deployAirbags(); // error
console.log(c.deployAirbags());; // "BWOOSH!"