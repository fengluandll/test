/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
Rx.Observable.from(getTransactionsArray())
    .bufferCount(20) //#A
    .timestamp() //#B
    .map(objs => R.map(R.set(dateLens, objs.timestamp), objs.value )) //#C
    .do(txs => console.log(`Processing ${txs.length} transactions`))
    .mergeMap(datedTxs =>
        Rx.Observable.fromPromise(txDb.bulkDocs(datedTxs)))//#D
    .subscribe(
        rec => console.log(`New record created: ${rec.id}`),
        err => console.log('Error: ' + err),
        ()  => console.log('Database populated!')
    );
