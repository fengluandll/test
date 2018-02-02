/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
Rx.Observable.from(getTransactionsArray())
    .concatMap(writeTx$) //#A
    .mergeMap(() => Rx.Observable.fromPromise(
        txDb.query(count, {reduce: true})))  //#B
    .subscribe(
        recs  => console.log(recs.rows[0].value), //#C
        error => console.log('Error: ' + error),
        ()    => console.log('Query completed!')
    );

