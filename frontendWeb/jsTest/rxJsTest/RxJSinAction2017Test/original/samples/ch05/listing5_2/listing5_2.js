/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
(function (Rx) {

  const $playground = document.getElementById('playground');
  const $output = document.getElementById('output');
  const mouseUp$ = Rx.Observable.fromEvent($playground, 'mouseup');
  const touchEnd$ = Rx.Observable.fromEvent($playground, 'touchend');

  const conformantMouseUp$ = mouseUp$.map(event => ({  //#A
    left: event.clientX,
    top: event.clientY
  }));

  const conformantTouchEnd$ = touchEnd$.map(event => ({  //#A
    left: event.changedTouches[0].clientX,
    top: event.changedTouches[0].clientY
  }));

  Observable.merge(conformantMouseUp$, conformantTouchEnd$)
      .subscribe(obj =>
          console.log(`Left: ${obj.left}, Top: ${obj.top}`)); //#B


})(Rx.KitchenSink);