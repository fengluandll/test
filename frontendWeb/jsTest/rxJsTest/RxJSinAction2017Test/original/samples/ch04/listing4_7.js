/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

Rx.Observable.timer(1000) //#A
    .delay(2000) //#B
    .timeInterval()
    .map(int => Math.floor(int.interval / 1000)) // #C
    .subscribe(seconds => console.log(`${seconds} seconds`));
