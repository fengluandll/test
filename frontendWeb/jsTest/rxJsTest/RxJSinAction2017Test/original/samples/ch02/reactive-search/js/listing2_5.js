/**
 * Listing 2.5
 * RxJS in Action
 * 
 * Luis Atencio
 * Paul Daniels
 */

 // seed test data
 var testData = [
    "github.com/Reactive-Extensions/RxJS",
    "github.com/ReactiveX/RxJS",
    "xgrommx.github.io/rx-book/",
    "reactivex.io/",
    "egghead.io/technologies/rx",
    "rxmarbles.com/"
];

// filter array based on query term provided
const filterData = function(arr, query) {
  return arr.filter((item) => {
    return query.length > 0 && item.startsWith(query);    
  });
};
const queryResults = filterData.bind(null, testData);

// handles to input and result HTML elements
const inputText = document.querySelector('#search');
const results = document.querySelector('#results');
      
// Stream declaration       
var search$ = Rx.Observable.fromEvent(inputText, 'keyup')
  .map(event => event.target.value)  
  .flatMap(query => Rx.Observable.from(queryResults(query)).defaultIfEmpty([]))
  .forEach(result => { 
    if(result.length === 0) {
      clearResults(results);      
    }    
    else {
      appendResults(results, result);  
    }    
  });

// Helper function to clear results from the DOM (side effects)
function clearResults(container) {
  if(container.childElementCount === 0) {
    return;
  }
  container.removeChild(container.firstChild);
  return clearResults(container);
}

// Helper function to append new results to the DOM (side effects)
function appendResults(container, result) {
    var li = document.createElement('li');
    var text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
}