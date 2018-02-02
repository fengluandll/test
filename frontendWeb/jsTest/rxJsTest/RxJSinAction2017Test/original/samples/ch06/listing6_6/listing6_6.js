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

function redirect(url) {
  window.location.href = url;
}

const sessionToken = extractSessionFromCookie('session_token');
const continueButton = document.getElementById('continue');
const  emailVerified$ = makeHttpGetRequest(`/verify/${sessionToken}`);   //#A



emailVerified$
    .sample(Rx.Observable.fromEvent(continueButton, 'click')) //#B
    .subscribe(u => redirect(`/dashboard?user=${u.token}`),  //#C
        e => redirect(`/notauthorized?type=${e.id}`));    //#D
