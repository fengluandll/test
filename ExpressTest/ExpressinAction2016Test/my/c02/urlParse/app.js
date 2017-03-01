var url = require("url");

var parseURL = url.parse("http://www.example.com/profile?name=bear");

console.log(parseURL.protocol);
console.log(parseURL.host);
console.log(parseURL.query);