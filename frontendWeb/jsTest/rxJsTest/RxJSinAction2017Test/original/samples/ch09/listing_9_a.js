/** 
 * Authors: Luis Atencio, Paul Daniels
 * CH09
 */
"use strict";

const expect = require('expect.js');

const notEmpty = input => !!input && input.trim().length > 0;

describe('Validation: Not Empty', function () {
	it('Should validate that a string is empty', function() { //#B		
		expect(notEmpty('some input')).to.be(true);
		
		expect(notEmpty(' ')).to.be(false);
		expect(notEmpty(null)).to.be(false);
		expect(notEmpty(undefined)).to.be(false);
    });
});

describe('Search: Filter Data', function () {
	it('Should remove unwanted elements from our data collection', function() { 
		
		let testData = [
		    'github.com/Reactive-Extensions/RxJS',
		    'github.com/ReactiveX/RxJS',
		    'xgrommx.github.io/rx-book',
		    'reactivex.io',
		    'egghead.io/technologies/rx',
		    'rxmarbles.com',
		    'https://www.manning.com/books/rxjs-in-action'
		];	

		let functionUnderTest = filterData.bind(null, testData);
		
		expect(functionUnderTest('marbles')).to.have.length(1);
		expect(functionUnderTest('marbles')).to.contain('rxmarbles.com');
		
		expect(functionUnderTest('github.com')).to.have.length(2);
		expect(functionUnderTest('github.com')).to.contain('github.com/Reactive-Extensions/RxJS', 'github.com/ReactiveX/RxJS');
		
		expect(functionUnderTest('xxxxxxx')).to.have.length(0);		
    });
});
