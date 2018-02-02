/**
 *  RxJS in action 
 *  Chapter 2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const searchBox = document.querySelector('#search');
const results = document.querySelector('#results');
      
function findAccountsInArray(arr, query) {
  return !arr ? [] : arr.filter(item => {
    return query.length > 0 && item.startsWith(query);    
  });
}

const findAccounts = findAccountsInArray.bind(null, testData); 

const search$ = Rx.Observable.fromEvent(inputText, 'keyup') 
  .map(event => event.target.value)  
  .flatMap(query => Rx.Observable.from 
      (findAccounts(query)).defaultIfEmpty([])); 

   search$.forEach(result => { 
   if(result.length === 0) {
      clearResults(results);      
   }    
   else {
      appendResults(results, result);  
   }    
});

function findAccounts(query) {
   return testData.filter(item => {
      return query.length > 0 && item.startsWith(query);    
  }); 
}

function clearResults(container) {
  if(container.childElementCount !== 0) {  // #A
    container.removeChild(container.firstChild);
    clearResults(container); //#B
  }  
}


function appendResult(result, container) { //#E
    var li = document.createElement('li');
    var text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
}
