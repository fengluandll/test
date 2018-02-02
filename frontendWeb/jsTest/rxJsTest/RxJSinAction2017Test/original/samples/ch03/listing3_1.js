console.clear();

const ajax = url => new Promise((resolve, reject) => {  
    let req = new XMLHttpRequest();
//    req.responseType = 'json';
    req.open('GET', url);
    req.onload = function() {
      if(req.status == 200) {
        let data = JSON.parse(req.responseText);
        resolve(data);  
      }
      else {
        reject(new Error(req.statusText));     
      }
    };
    req.onerror = function () {
      reject(new Error('IO Error'));  
    };
    req.send();
  });


// const searchTerm = 'reactive+programming';
// const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchTerm}`;

const inputText = document.querySelector('#search');
const results = document.querySelector('#results');
const count = document.querySelector('#count');

const notEmpty = input => !!input && input.trim().length > 0;
const URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';

const search$ = Rx.Observable.fromEvent(inputText, 'keyup')  
  .debounceTime(500)
  .pluck('target','value')   
  .filter(notEmpty)
  .do(term => console.log(`Searching with term ${term}`))  
  .map(query => URL + query)
  .switchMap(query => Rx.Observable.fromPromise(ajax(query)).pluck('query', 'search').defaultIfEmpty([]))  
  .do(result => {
    count.innerHTML = `${result.length} results`;
  })
  .subscribe(arr => { 
    if(arr.length === 0) {
      clearResults(results);      
    }    
    else {
        appendResults(results, arr);  
    }    
  });

function clearResults(container) {
  if(container.childElementCount === 0) {
    return;
  }
  container.removeChild(container.firstChild);
  return clearResults(container);
}

function appendResults(container, result) {
    result.forEach(entry => {
      let li = document.createElement('li');
      let text = document.createTextNode(entry.title);
      li.appendChild(text);
      container.appendChild(li);  
    });    
}