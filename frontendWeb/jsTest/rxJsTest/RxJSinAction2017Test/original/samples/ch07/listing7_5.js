const computeHalf = val => val / 2;

Rx.Observable.of(2,4,5,8,10)
   .map(num => {
       console.log('Seeing ' + num);
      if(num % 2 !== 0) {
        throw new Error(`Unexpected odd number: ${num}`); 
      }
      return num;
   })
   .catch((err, source) => source)
   .map(computeHalf)
   .subscribe(
       function next(val) {
          console.log(val);
       },       
       function error(err) {
          console.log(`Received error: ${err}`); 
       },
       function complete() {
          console.log('All done!');
       }
    );
