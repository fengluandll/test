/**
 * Created by YunZhang on 2/3/17.
 */

function parent() {
    var message = 'Hello,world';

    function child() {
        console.log(message);
    }

    return child;
}

var childFN = parent();

childFN();