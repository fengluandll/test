/**
 *  RxJS in action
 *  Chapter #6
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
"use strict";

(function (root, Rx) {
  Rx.Observable.prototype.startWith = value => {
    let source = this;
    return Rx.Observable.create(observer => {
      observer.next(value);
      return source.subscribe(observer);
    });
  }

})(window, Rx.KitchenSink);