/**
 *  RxJS in action
 *  Reactive Banking in Action
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

(function(root, Rx) {
    "use strict";

    const baseUrl = '/api/banking/v1';

    var Observable = Rx.Observable,
        Disposable = Rx.Subscription;

    var $email = document.getElementById('email');
    var $password = document.getElementById('password');
    var $verify = document.getElementById('verify');

    var pageLoaded = Observable.fromEvent(root, 'load');

    var emailChanged = Observable.fromEvent($email, 'change', e => e.target.value);
    var passwordChanged = Observable.fromEvent($password, 'change', e => e.target.value);
    var verifyClicked = Observable.fromEvent($verify, 'click');

    function openVerifyWindow(token) {
        return root.open(`/verify?token=${token}`, 'Verify Email');
    }

    function postJSON(url, data) {
        return Observable.fromPromise($.ajax(url, {type: 'POST', data: JSON.stringify(data), contentType: 'application/json'}));
    }

    function doLogin(token) {
        root.document.cookie = "auth_token=" + token;
        root.location.href = "/";
    }



    verifyClicked
        .withLatestFrom(emailChanged, passwordChanged, (_, email, password) => ({email, password}))
        .exhaustMap(credentials => postJSON(`${baseUrl}/requestToken`, credentials))
        .exhaustMap(payload => {
            var verifyWindow = openVerifyWindow(payload.token);
            return postJSON(`${baseUrl}/dologin`, payload)
             .finally(() => verifyWindow.close());
        })
        .delay(2000)
        .subscribe(
            success => doLogin(success.token)
        );

})(window, Rx.KitchenSink);