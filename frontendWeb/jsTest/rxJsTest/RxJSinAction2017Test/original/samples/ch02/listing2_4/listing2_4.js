/**
 *  RxJS in action
 *  Chapter 2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const searchBox = document.querySelector('#search'); //-> <input>
const results = document.querySelector('#results');  //-> <ul>

const testData = [
  '4111111111111111',
  '5105105105105100',
  '4342561111111118',
  '6500000000000002'
];


searchBox.addEventListener('keyup', function (event) {
  var query = event.target.value;
  var searchResults = [];
  if (query && query.length > 0) {
    for (result of testData) {
      if (result.startsWith(query)) {
        searchResults.push(result);
      }
    }
  }

  clearResults(results);

  for (result of searchResults) {
    appendResult(result, results);
  }
});

function clearResults(container) {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild);
  }
}

function appendResult(result, container) {
  var li = document.createElement('li');
  var text = document.createTextNode(result);
  li.appendChild(text);
  container.appendChild(li);
}
