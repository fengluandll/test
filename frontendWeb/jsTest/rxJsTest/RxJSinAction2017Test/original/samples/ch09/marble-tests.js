/**
 * Marble tests for cold and hot observables
 * Authors: Luis Atencio, Paul Daniels
 * CH09
 */
"use strict";

const Rx = require('rxjs/Rx');
const R = require('ramda');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

const Notification = Rx.Notification;
const TestScheduler = Rx.TestScheduler;

//------------------------------------------------------------------------------------------------------//
// Helper code adapted from 
// https://github.com/btroncone/egghead-rxjs-marble-testing-intro/blob/master/spec/helpers/marble-testing.ts
function assertDeepEqual(actual, expected) {
  expect(actual).to.deep.equal(expected);
}
const testScheduler = new TestScheduler(assertDeepEqual);

//-----
function hot() {  
  return testScheduler.createHotObservable.apply(testScheduler, arguments);
}

function cold() {
  return testScheduler.createColdObservable.apply(testScheduler, arguments);
}

function expectObservable() {  
  return testScheduler.expectObservable.apply(testScheduler, arguments);
}

function expectSubscriptions() {  
  return testScheduler.expectSubscriptions.apply(testScheduler, arguments);
}
//------------------------------------------------------------------------------------------------------//

describe('Validation: Not Empty', function () {
	it('should parse a marble string into a series of notifications and types', function () {
        var result = TestScheduler.parseMarbles('-------a---b---|', { a: 'A', b: 'B' });
        expect(result).deep.equal([
            { frame: 70, notification: Notification.createNext('A') },
            { frame: 110, notification: Notification.createNext('B') },
            { frame: 150, notification: Notification.createComplete() }
        ]);
    });
});

describe('createColdObservable()', function () {
    it('should create a cold observable', function () {
        var expected = ['A', 'B'];
        var scheduler = new TestScheduler(null);
        var source = scheduler.createColdObservable('--a---b--|', { a: 'A', b: 'B' });
        expect(source instanceof Rx.Observable).to.be.true;
        source.subscribe(function (x) {
            expect(x).to.equal(expected.shift());
        }); 
        scheduler.flush();
        expect(expected.length).to.equal(0);
    });
});

describe('Marble test with debounceTime', function () {	
     it('should delay all element by the specified time', function () {
        var e1 = hot('-a--------b------c----|');        
        var expected = '------a--------b------(c|)';
        expectObservable(e1.debounceTime(50, testScheduler)).toBe(expected);        
        testScheduler.flush();
    });     
});

describe('Marble test with debounceTime', function () {	
     it('Should delay all element by the specified time', function () {
        let scheduler = new TestScheduler(assertDeepEqual);	
        let source = scheduler.createHotObservable('-a--------b------c----|');        
        let expected = '------a--------b------(c|)';
        scheduler.expectObservable(source.debounceTime(50, scheduler)).toBe(expected);        
        scheduler.flush();
    });     
});

describe("Simple schedule test", function () {

	it('should parse a marble string into a series of notifications and types', function () {
            var result = TestScheduler.parseMarbles('--a---b---|', { a: 'A', b: 'B' });
            expect(result).deep.equal([
                { frame: 20, notification: Notification.createNext('A') },
                { frame: 60, notification: Notification.createNext('B') },
                { frame: 100, notification: Notification.createComplete() }
            ]);
        });

		it('Create time from a marble diagram', function () {
		   let scheduler = new TestScheduler();
		   let time = scheduler.createTime('-----|');
		   expect(time).to.equal(50);
		});


	it('Should schedule things in order when flushed if each this is scheduled synchrously', function () {
                
        let stored = [];
        
        let store = state => () => stored.push(state);

        let scheduler = Rx.Scheduler.queue;
        
        scheduler.schedule(store(1));
        scheduler.schedule(store(2));
        scheduler.schedule(store(3));
        scheduler.schedule(store(4));
        scheduler.schedule(store(5));
        
        scheduler.flush();
        scheduler.flush();
        
        expect(stored).to.deep.equal([1, 2, 3, 4, 5]);
    });
});

describe('Map operator', function () {	
	it('Should map multiple values', function () {                
		let scheduler = new TestScheduler(assertDeepEqual);	
        let a = scheduler.createColdObservable('--1--2--3--4--5--6--7--8--9--|');        
        let expected = '--a--b--c--d--e--f--g--h--i--|';
        let r = a.map(num => num * num);
        scheduler.expectObservable(r).toBe(expected, { 'a': 1, 'b': 4, 'c': 9, 'd': 16, 'e': 25, 'f': 36, 'g':49, 'h': 64, 'i': 81});        
        scheduler.flush();
    });
});


const isEven = num => num % 2 === 0;
const square = num => num * num;
const add = (a, b) => a + b;

describe('Run interval with virtual scheduler', function () {	
   const runInterval = (source$) =>  
       source$   		       	        	
    		.take(10)    
    	    .filter(isEven)
    		.map(square)       		
      		.reduce(add);      	      		      		      		
   
   it('Should square and add even numbers', function () {    	
    	
   		let scheduler = new TestScheduler(assertDeepEqual);	
   		let source = scheduler.createColdObservable('-1-2-3-4-5-6-7-8-9-|');        
        let expected = '-------------------(s-|';

   		let r = runInterval(source);

   		scheduler.expectObservable(r).toBe(expected, {'s': 120});        
        
        scheduler.flush();
	});  
});

// Refactored search
const notEmpty = input => input && input.trim().length > 0;

const search$ = (source$, fetchResult$, url = '', scheduler = null) => 
	source$ 
	  .debounceTime(500, scheduler)	 	  
	  .filter(notEmpty)
	  .do(term => console.log(`Searching with term ${term}`))  
	  .map(query => url + query)	  	  
	  .switchMap(fetchResult$);

describe('Search component', function () {	

	const results_1 = ['rxmarbles.com', 'https://www.manning.com/books/rxjs-in-action'];
	const results_2 = ['https://www.manning.com/books/rxjs-in-action'];

	function frames(n = 1, unit = '-') {
		return (n === 1) ? unit : 
		    unit + frames(n - 1, unit);
	} 

	// mocked promise search
	const searchFn = term => {
		let r = [];
		if(term.toLowerCase() === 'rx') {						
			r = results_1;			
		}
		else if (term.toLowerCase() === 'rxjs') {						
			r =  results_2;		
		}
		return Rx.Observable.of(r);
	};

    it('Should test search stream', function () {

     	let searchTerms = {
		  a: 'r',
		  b: 'rx',
		  c: 'rxjs',			  
		};
		
		let scheduler = new TestScheduler(assertDeepEqual);	
		
		let source = scheduler.createHotObservable('-(ab)-' + frames(50) +'-c|', searchTerms);       

		let r = search$(source, searchFn, '', scheduler);

        let expected = frames(50) + '-f------(s|';

   		scheduler.expectObservable(r).toBe(expected,    			
   			{
   				'f': results_1,
   				's': results_2
   		    }
   		);        
        
        scheduler.flush();
    });     
});









