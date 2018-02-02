
/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

function sendRequest(query) {  // #A
   console.log('querying...');
   var searchResults = [];
   if(query && query.length > 0) {
      for(result of testData) {
         if(result.startsWith(query)) {
             searchResults.push(result);
         }
      }
   }
   if(searchResults.length === 0) {
       clearResults(results);      
   }   
   else {
      for(result of searchResults) {
          appendResult(result, results);    
      }        
   }      
}

var debouncedRequest = debounce(sendRequest, 1000); // #B

searchBox.addEventListener('keyup', function (event) {
  debouncedRequest(event.target.value);
}); //#C
