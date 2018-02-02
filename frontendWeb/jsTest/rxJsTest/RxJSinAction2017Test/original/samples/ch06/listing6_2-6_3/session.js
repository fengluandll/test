/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
"use strict";
(function(global, Rx) {

    var $status = document.getElementById('status');

    function makeHttpPostRequest(url, data) {
        return new Promise((resolve, reject) => {
           resolve('1234abcdef');
        });
    }

    /**
     * Listing 6.2
     */
    class SessionDisposable {
        constructor(sessionToken) {
            this.token = sessionToken;
            this.disposed = false;
            let expiration = moment().add(1, 'days').toDate(); //#A
            document.cookie = `session_token=${sessionToken};  
                       expires=${expiration.toUTCString()}`;   //#B
        }

        getToken() {
            return this.token;
        }

        unsubscribe() { //#C
            if (!this.disposed) {
                this.disposed = true;
                this.token = null;
                document.cookie = 'session_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
                console.log('Ended session');
            }
            document.cookie =
              'session_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            console.log('Ended session');
        }
    }


    /**
     * Listing 6.3
     */
    const logoutButton = document.getElementById('logout');
    const logoutByUser$ = Rx.Observable.fromEvent(logoutButton, 'click');
    const logoutByUnload$ = Rx.Observable.fromEvent(window, 'beforeunload');
    const logout$ = Rx.Observable.merge(logoutByUser$, logoutByUnload$);


    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login');

    const statusBar = document.getElementById('status');


    const authenticated$ = Rx.Observable.fromEvent(loginButton, 'click')
      .switchMap(() => {
          let user = emailInput.value;
          let password = passwordInput.value;

          return makeHttpPostRequest('/dologin', {user, password});
      });

    const loggedIn$ = authenticated$
        .flatMap(session =>
            Rx.Observable.using(
                () => new SessionDisposable(session),
                token => Rx.Observable.of(token)
                  .concat(Rx.Observable.never())))
        .takeUntil(logout$); //#D

    const subscription = loggedIn$.subscribe(
        ({token}) => {
            statusBar.style.background = 'green';
            console.log(`Began session ${token}`);
        });

})(window, Rx.KitchenSink);