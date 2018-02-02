const computeHalf = val => val / 2;

const maxRetries = 4;

Rx.Observable.of(2,4,5,8,10)
   .map(num => {
      if(num % 2 !== 0) {
        throw new Error(`Unexpected odd number: ${num}`); 
      }
      return num;
   })
   .retryWhen(errors$ => 
          Rx.Observable.range(1, maxRetries)
            .zip(errors$, (i, err) => ({'i': i, 'err': err}))
            .mergeMap( ({i, err}) => {                
                if(i > maxRetries - 1) {
                  return Rx.Observable.throw(err);
                }                
                return Rx.Observable.timer(i * 1000)
                  .do(() => console.log(`Retrying after ${i} second(s)...`));
            })      
    )
//  .retryWhen(errors$ => 
//           Rx.Observable.range(1, maxRetries)
//             .zip(errors$, (i, err) => ({'i': i, 'err': err}))
//             .mergeMap( ({i, err}) =>                
//                Rx.Observable.if(() => i <= maxRetries - 1,
//                     Rx.Observable.timer(i * 1000)
//                       .do(() => console.log(`Retrying after ${i} second(s)...`)),
//                     Rx.Observable.throw(err))
//             )      
//     )
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
