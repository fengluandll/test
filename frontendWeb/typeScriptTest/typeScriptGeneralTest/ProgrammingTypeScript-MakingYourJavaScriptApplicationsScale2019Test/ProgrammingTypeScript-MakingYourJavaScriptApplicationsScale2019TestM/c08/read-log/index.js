"use strict";
exports.__esModule = true;
var fs = require("fs");
// Read data from an Apache server's access log
fs.readFile('/var/log/apache2/access_log', { encoding: 'utf8' }, function (error, data) {
    if (error) {
        console.error('error reading!', error);
        return;
    }
    console.info('success reading!', data);
});
// Concurrently, write data to the same access log
fs.appendFile('/var/log/apache2/access_log', 'New access log entry', function (error) {
    if (error) {
        console.error('error writing!', error);
    }
});
