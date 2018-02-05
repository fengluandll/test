'use strict';

var observable = function observable(events) {
    var INTERVAL = 1 * 1000;
    var schedulerId = void 0;

    return {
        subscribe: function subscribe(observer) {
            schedulerId = setInterval(function () {
                if (events.length === 0) {
                    observer.complete();
                    clearInterval(schedulerId);
                    schedulerId = undefined;
                } else {
                    observer.next(events.shift());
                }
            }, INTERVAL);

            return {
                unsubscibe: function unsubscibe() {
                    if (schedulerId) {
                        clearInterval(schedulerId);
                    }
                }
            };
        }
    };
};

var sub = observable([1, 2, 3]).subscribe({
    next: console.log,
    complete: function complete() {
        return console.log('Done');
    }
});
//# sourceMappingURL=bare_observable.js.map