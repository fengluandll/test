/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
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

