/**
 * Created by Allbts-IT on 5/04/2016.
 */
'use strict';

class InsurancePolicy{}

function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }
}

class Car{}

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

makeInsurable(Car.prototype);
const car2 = new Car();
car2.addInsurancePolicy(new InsurancePolicy()); // works

