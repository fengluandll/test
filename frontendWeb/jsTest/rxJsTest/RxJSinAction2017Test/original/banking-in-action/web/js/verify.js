/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
(function(root, Rx) {
    "use strict";

    jQuery.extend({
        urlParams : function(str) {
            return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
        }
    });


    console.log($.urlParams());

    var $button = root.document.getElementById('verify');
    Rx.Observable.fromEvent($button, 'click')
        .exhaustMap(() => postJSON('/api/banking/v1/verifyLogin', {verifyToken: $.urlParams().token}))
        .subscribe();

    function postJSON(url, data) {
        return $.ajax(url, {
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST'
        });

    }

})(window, Rx.KitchenSink);