/**
 * Sync and async tests
 * Authors: Luis Atencio, Paul Daniels
 * CH09
 */
"use strict";

const Rx = require('rxjs/Rx');
const expect = require('expect.js');
const assert = require('assert.js');
const virualScheduler = new Rx.TestScheduler()

//Mocha.setup({ ui: 'bdd', checkLeaks: true});

describe('Adding numbers', function () {

  it('Should add numbers together', function () {
    
    const adder = (total, delta) => total + delta;

    Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9], Rx.Scheduler.immediate)
      .reduce(adder)
      .subscribe(total => {
       	expect(total).to.equal(45);
      });
   });

  it('Should add numbers from a generator', function () {
    
    const adder = (total, delta) => total + delta;

    Rx.Observable.generate(1, x => x < 10, x => x + 1)      
      .reduce(adder)
      .subscribe(total => {      	
       	expect(total).to.equal(45);
      });
   });


   it('Should add numbers together with delay', function (done) {    	
    	Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
      		.reduce((total, delta) => total + delta)
      		.delay(1500)
      		.subscribe(total => {      	
       			expect(total).to.equal(45);
      		}, null, done);
	});  

   const isEven = num => num % 2 === 0;
   const square = num => num * num;
   const add = (a, b) => a + b;

   const runInterval = (observer, scheduler = null) =>  
    	Rx.Observable.interval(1000, scheduler)   			    		
    		.take(10)    
    	    .filter(isEven)
    		.map(square)       		
      		.reduce(add)      	      		      		
      		.subscribe(observer);	
   
   it('Should square and add even numbers', function (done) {    	
    	
    	this.timeout(20000);		
   		
   		runInterval({
   			next: total => expect(total).to.equal(120),
   			err:  err   => assert.fail(err.message),
   			complete: done 
   		});
	});  
  	
	it('Emits values synchronously on default scheduler', function () { 
 		var temp = [];    		
		Rx.Observable.range(1, 5)
	    .do([].push.bind(temp))				
		.subscribe(value => {				
			expect(temp).to.have.length(value);
			expect(temp).to.contain(value);			
		});		
	}); 

 	it('Emits values on async scheduler', function (done) { 
 		var temp = [];   
 		console.log('Before subscription');	    	    	
		Rx.Observable.range(1, 5)
	    .do([].push.bind(temp))		
		.observeOn(Rx.Scheduler.async)		
		.subscribe(value => {				
			expect(temp).to.have.length(5);
			expect(temp).to.contain(value);
			console.log('Emitted', value); 
		}, done, done);
		console.log('After subscription');		
	}); 


   it('Uses a virtual scheduler to control event notification', function (done) {    	
    		
   		virualScheduler.createColdObservable();

   		runInterval({
   			next: total => expect(total).to.equal(120),
   			err:  err   => assert.fail(err.message),
   			complete: done 
   		}, virualScheduler);
	});   
});


