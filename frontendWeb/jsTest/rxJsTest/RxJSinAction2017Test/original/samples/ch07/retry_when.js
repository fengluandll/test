const computeHalf = val => val / 2;

Rx.Observable.of(2,4,5,8,10)
   .map(num => {
      if(num % 2 !== 0) {
        throw new Error(`Unexpected odd number: ${num}`); 
      }
      return num;
   })
   .retryWhen(errors => errors.delay(3000))
   .map(computeHalf)
   .subscribe(
       function next(val) {
          console.log(val);
       },       
       function error(err) {
          console.log(`Received error: ${err}`); //#B
       },
       function complete() {
          console.log('All done!');
       }
    );
