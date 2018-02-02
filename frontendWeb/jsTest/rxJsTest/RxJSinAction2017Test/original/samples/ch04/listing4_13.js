
/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

var search$ = Rx.Observable.fromEvent(inputText, 'keyup')
  .map(event => event.target.value)  
  .debounceTime(1000) //#A
  .mergeMap(query =>  
       Rx.Observable.from(queryResults(query)).defaultIfEmpty([]))
  .forEach(result => { 
    if(result.length === 0) {
      clearResults(results);      
    }    
    else {
        appendResults(results, result);  
    }    
  });
