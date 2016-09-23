/**
 * Created by Allbts-IT on 23/09/2016.
 */
'use strict';

/*
 * Schedule an invocation or invocations of f() in the future.
 * Wait start milliseconds, then call f() every interval milliseconds,
 * stopping after a total of start+end milliseconds.
 * If interval is specified but end is omitted, then never stop invoking f.
 * If interval and end are omitted, then just invoke f once after start ms.
 * If only f is specified, behave as if start was 0.
 * Note that the call to invoke() does not block: it returns right away.
 */

function invoke(f,start,interval,end) {
    if (!start) start = 0;
    if (arguments.length <=2)
        setTimeout(f,start);
    else {
        setTimeout(repeat,start);
    }
    function repeat() {
        var h = setInterval(f,interval);
        if (end) setTimeout(function () {
            clearInterval(h)
        },end);
    }
}

