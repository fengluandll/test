var http = require('http');

var urls = ['https://api.twitter.com/1.1/search/tweets.json?q=node&src=typd',
'http://search.twitter.com/search.json?q=javascript'];

var allResults = [];
var responded = 0;

function collectResponse(res) {
    var responseBody = '';
    res.setEncoding('utf8');

    res.on('data',function (d) {
       responseBody += d;
    });

    /// when the response ends, we should have all the response body
    res.on('end',function () {
       var response = JSON.parse(responseBody);
       allResults = allResults.concat(response.results);
        console.log('I have %d results for', response.results.length, res.req.path);
        responded+=1;

        /// check if we have responses to all requests
        if (responded == urls.length) {
            console.log('All responses ended. Number of total results:', allResults.length);
        }

    });
}

urls.forEach(function (url) {
    http.get(url,collectResponse);
});


