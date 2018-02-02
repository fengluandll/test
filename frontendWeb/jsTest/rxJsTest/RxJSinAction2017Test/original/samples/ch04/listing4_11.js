/**
 *  RxJS in action
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

function copyToArray(arguments) {
    var arr = new Array(arguments.length);
    for (var i = 0, len = arguments.length; i < len; ++i)
        arr[i] = arguments[i];
    return arr;
}

function debounce(fn, time) {
    var timeoutId;
    return function () {
        const args = [fn, time]
            .concat(copyToArray(arguments));
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout.apply(window, args);
    }
} 
