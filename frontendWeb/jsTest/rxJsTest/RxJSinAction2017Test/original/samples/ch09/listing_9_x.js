/** 
 * Authors: Luis Atencio, Paul Daniels
 * CH09
 */
"use strict";

mocha.setup({ ui: 'bdd', checkLeaks: true});

const expect = chai.expect;
const assert = chai.assert;

const makeHttpCall = function (url, success, error) {
  let req = new XMLHttpRequest(); //#A
//  req.responseType = 'json';
  req.open('GET', url);
  req.onload = function() {
    if(req.status == 200) {
      let data = JSON.parse(req.responseText);
      success(data); //#B
    }
    else {
      req.onerror();
    }
  }
  req.onerror = function () {
    if(error) {
      error(new Error(req.statusText)); //#C
    }
  };
  req.send();
};

describe('Asynchronous Test', function () {
	it('Should fetch Wikipedia pages for search term "rxjs"', function() { 
       
     const searchTerm = 'rxjs';  //#A
     const url = `https://en.wikipedia.org/w/api.php?action=query
                  &format=json&list=search&utf8=1&srsearch=${searchTerm}`;
      
     let result = undefined;
      
     makeHttpCall(url, data => {
       result = data;   //#B       
     });
      
     //expect(result).to.not.be.undefined; //#C
      expect(result).to.be.undefined; //#C
   });      
});



describe('Asynchronous Test of makeHttpCall', function () {
	it('Should fetch Wikipedia pages for search term "RxJS"', function (done) { 
       
     const searchTerm = 'rxjs';
     const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchTerm}`;
     
     const success = data => {
       let results = data.query.search;
       expect(results).to.have.length(10);
       done();          
     };
     
     const error = (err) => {
        done(err);
     };
      
     makeHttpCall(url, success, error);      
   });  
  
   it('Should fail for invalid URL', function (done) { 
       
     const url = 'invalid-url';     

     const success = data => {
       done(new Error('Should not have been succesful!'));
     };
     
     const error = (err) => {
       expect(err).to.have.property('message').to.equal('No Content');
       done();
     };
      
     makeHttpCall(url, success, error);      
   }); 


   it('Should fetch Wikipedia pages for search term "reactive programming"  using an observable + promise', function (done) { //#A        
     
     const searchTerm = 'reactive+programming';
     const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchTerm}`;

     const testFn = query => Rx.Observable.fromPromise(ajax(query)) //#B
        .subscribe(data => {
              expect(data).to.have.property('query')
                .with.property('search')
                .with.length(10);         
             }, null, done);   //#C    
     testFn(url);  //#D
  });  
});
    
mocha.run();