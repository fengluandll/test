/**
 * Created by YunZhang on 2/3/17.
 */

var fs = require('fs');

fs.readFile('/etc/hosts',function (err,data) {
    if (err) {
        console.log(err);
    }

    console.log(data);
});