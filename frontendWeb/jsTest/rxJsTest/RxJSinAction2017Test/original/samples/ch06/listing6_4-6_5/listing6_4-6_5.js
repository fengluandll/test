/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
function extractSessionFromCookie(key) {
  const regex = new RegExp('^' + key);
  let allCookies = document.cookie;
  for (let cookie of allCookies.split(';')) {
    if (cookie.match(regex)) {
      return cookie.split('=')[1];
    }
  }

  return 'invalid_token';
}

const sessionToken = extractSessionFromCookie('session_token');
const continueButton = document.getElementById('continue');

// 6.4
const  emailVerified$ =
  Rx.Observable.fromPromise(makeHttpGetRequest(`/verify/${sessionToken}`)); //#A

const continueLogin$ =
  Rx.Observable.fromEvent(continueButton, 'click') //#B
        .skipUntil(emailVerified$);   //#C

// 6.5
continueLogin$.take(1)  //#A
  .subscribe(
        x => redirect('/'),  //#B
        e => redirect(`/oops?type=${e.id}`) //#B
);

const sendEmail$ = Rx.Observable.fromEvent(sendEmailButton, 'click');
const emailAddress = document.getElementById('emailAddress');

sendEmail$
  .map(() => ({
    emailAddress: emailAddress.value,
    noonce: new Date().toString()
  }))
  .switchMap(() => makeHttpPostRequest('/sendEmail', {}))
  .subscribe(() => showBanner('Email Sent!'));


emailSent$
    .exhaustMap  (resp =>  //#C
        $.postJSON(`/sendEmail`,  //#C
            {emailAddress: resp.emailAddress,
                nonce: new Date().toString()
            }))
    .subscribe(() => showBanner(`Email Sent!`)); //#D
