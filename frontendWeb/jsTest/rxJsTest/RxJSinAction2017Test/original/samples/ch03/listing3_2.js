/**
 *  RxJS in action 
 *  Chapter 3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

var Observable = require('rxjs/Observable').Observable;

Observable.create(observer => {
    var i = 1;
    const timeoutId = setTimeout(() => {
        observer.next(`Next: ${i++}`);
        if(i === 10) {
            observer.complete();
        }
    }, 500);

    return () => cancelTimeout(timeoutId);
});
