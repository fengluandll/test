/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const dateLens = R.lensProp('date'); //#A

const writeTx$ = tx => Rx.Observable.of(tx)
    .timestamp() //#B
    .map(obj => R.set(dateLens, obj.timestamp, obj.value  ))  //#C
    .do(tx => console.log(`Processing transaction for: ${tx.name}`))
    .mergeMap(datedTx => Rx.Observable.fromPromise(txDb.post(datedTx))); //#D

Rx.Observable.from(getTransactionsArray()) //#E
    .flatMap(writeTx$) //#F
    .subscribe(
        rec => console.log(`New record created: ${rec.id}`),
        err => console.log('Error: ' + err),
        ()  => console.log('Database populated!')
    );
