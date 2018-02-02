(function(global, Rx) {
    "use strict";

    var Observable = Rx.Observable;

    if (window.document.cookie.indexOf('auth_token=') < 0) {
        window.location.href = '/login';
    }


    const dragTarget = $('.drag-target');
    const root = $('#canvas');

    const dropTarget = $('.drop-target');

    var mouseDown = Observable.fromEvent(dragTarget, 'mousedown');
    var mouseUp = Observable.fromEvent(dragTarget, 'mouseup');
    var mouseMove = Observable.fromEvent(document, 'mousemove');


    mouseDown.switchMap(
        md => {
            var target = $(md.target);
            // calculate offsets when mouse down
            var startX = md.offsetX, startY = md.offsetY;

            // Capture the original parent
            var originalParent = target.parent();

            // Move the dragged element onto the top level
            root.append(target);
            target.addClass('text-info');
            target.addClass('dragging');




            return mouseMove.takeUntil(mouseUp)
                .do(mm => mm.preventDefault())
                .map(mm => ({
                    left: mm.clientX - startX,
                    top: mm.clientY - startY
                }))
                .startWith({
                    left: md.clientX - startX,
                    top: md.clientY - startY
                })
                .finally(() => {
                    dropTarget.removeClass('text-info');
                    target.removeClass('dragging');
                    originalParent.prepend(target);
                });
        }
    )
    .forEach(coord => {
        dragTarget.css(coord);
    });

    ///////
    // Logout
    //////
    class SessionDisposable {
        unsubscribe() { //#C
            document.cookie =
                'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            console.log('Ended session');
            global.location.href = '/login';
        }
    }

    var logout$ = $('.logout');
    var doLogout = Rx.Observable.fromEvent(logout$, 'click');
    Rx.Observable.using(() => new SessionDisposable(), () => Rx.Observable.never())
        .takeUntil(doLogout)
        .subscribe();




}(window, Rx.KitchenSink));

