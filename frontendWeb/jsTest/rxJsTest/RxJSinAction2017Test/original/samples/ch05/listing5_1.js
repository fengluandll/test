/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
(function (Rx) {

  const mouseUp$ = Rx.Observable.fromEvent(window, 'mouseup');
  const touchEnd$ = Rx.Observable.fromEvent(window, 'touchend');

  Rx.Observable.merge(mouseUp$, touchEnd$)  //#A
    .map(event => {
      switch (event.type) { //#B
        case 'touch':
          return {
            left: event.changedTouches[0].clientX,
            top: event.changedTouches[0].clientY
          };
        case 'click':
          return {
            left: event.clientX,
            top: event.clientY
          };
      }
    })
    .subscribe(obj =>
      console.log(`Left: ${obj.left}, Top: ${obj.top}`));
})(Rx.KitchenSink);