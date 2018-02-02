/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

   // Helper functions
const startsWith = (str, account) => account.name.startsWith(str);
const startsWithSaving = startsWith.bind(null, 'saving');

const accounts$ = Rx.Observable.fromPromise( // #A
   makeHttpCall('/accounts')) // #B
   .map(results => results.filter(startsWithSaving)) //#C
   .map(arr => arr.length) //#D
   .subscribe(console.log);
