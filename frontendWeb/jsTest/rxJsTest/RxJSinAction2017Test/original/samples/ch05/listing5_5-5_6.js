/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const myStocksPanel = document.querySelector('#my-stocks'); //#A

const mouseDown$ = Rx.Observable.fromEvent(myStocksPanel, 'mousedown');//#B
const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup'); //#C
const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove'); //#D

const drag$ = mouseDown$.concatMap(() => mouseMove$.takeUntil(mouseUp$));

drag$.forEach(event => {
    myStocksPanel.style.left = event.clientX + 'px';
    myStocksPanel.style.top = event.clientY + 'px';
});
