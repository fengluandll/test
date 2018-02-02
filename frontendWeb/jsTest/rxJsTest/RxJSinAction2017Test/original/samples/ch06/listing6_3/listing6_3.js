/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const authenticated$ = Observable.fromPromise(   //#A
    makeHttpPostRequest('/doLogin',
        {user: 'joe', password: '<some-password>'}));

const logout = Rx.Observable.merge(
    Rx.Observable.fromEvent(window, 'beforeunload'),
    Rx.Observable.fromEvent(document.getElementById('logout'), 'click'));

const loggedIn$ = authenticated$
    .mergeMap(session =>
        Rx.Observable.using  (
            () => new SessionDisposable(session), //#B
            token => Rx.Observable.never().startWith(tokensession.getToken()))) //#C
    .takeUntil(logout); //D

const subscription = loggedIn$.subscribe(
    session => console.log(`Began session ${session}`));
