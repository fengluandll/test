console.clear();

function exclude(predicate) {
  return Rx.Observable.create(subscriber => { //#A
     
      let source = this; //#B
    
      return source.subscribe(value => { //#B       
           try { //#C
              if(!predicate(value)) {
                  subscriber.next(value);
              }              
           } 
           catch(err) {
              subscriber.error(err);
           }
         },     
         err => subscriber.error(err), //#D
         () => subscriber.complete());                   
   });
}
//#A Create a new observable context to return
//#B Because we're in an arrow function `this` is from the outer scope.
//#C Save our inner subscription
//#D Catch errors from user-provided callbacks
//#E Be sure to handle errors and completions as appropriate and send them along

const evenNum = num => num % 2 === 0;

Rx.Observable.from([1, 2, 3, 4, 5, 6])
  .filter(evenNum)
  .forEach(console.log);

Rx.Observable.prototype.exclude = exclude;

Rx.Observable.from([1, 2, 3, 4, 5, 6])
  .exclude(evenNum)
  .forEach(console.log);
