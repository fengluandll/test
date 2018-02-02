/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
    "use strict";
(function(root, Rx) {
    var $button = $('#verify');
    Rx.Observable.fromEvent($button, 'click')
        .mergeMap(() => $.post('/email/verified', {}))
        .subscribe();

})(window, Rx.KitchenSink);