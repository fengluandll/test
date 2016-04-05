/**
 * Created by Allbts-IT on 5/04/2016.
 */
'use strict';

class InsurancePolicy{}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() { return this[_POLICY]; }
    o[IS_INSURED] = function() { return !!this[_POLICY]; }
}

class Car{}

const car1 = new Car();
makeInsurable(car1);
car1[ADD_POLICY](new InsurancePolicy());


