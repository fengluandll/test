/**
 *  RxJS in action
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

var timeoutId = null;  //#A

searchBox.addEventListener('keyup', function (event) {

    clearTimeout(timeoutId); //#B

    timeoutId = setTimeout(function (query) { //#C
        console.log('querying...');
        var searchResults = [];
        if (query && query.length > 0) {
            for (result of testData) {
                if (result.startsWith(query)) {
                    searchResults.push(result);
                }
            }
        }
        if (searchResults.length === 0) {
            clearResults(results);
        }
        else {
            for (result of searchResults) {
                appendResult(result, results);
            }
        }
    }, 1000, event.target.value);  //#D
});
