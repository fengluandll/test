/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
function withdraw$({name, accountId, type, amount}) { //#A
    return Rx.Observable.of(accountId) //#B
        .mergeMap(id => Rx.Observable.fromPromise(accountsDb.get(id))) //#C
        .filter(doc => !!doc) //#D
        .do(doc => console.log(
            doc.balance < amount ?
                'WARN: This operation will cause an overdraft!' :
                'Sufficient funds'
        ))
        .mergeMap(doc = > Rx.Observable.fromPromise( //#E
            accountsDb.put({
                _id: doc._id,
                _rev: doc._rev,
                balance: doc.balance - amount
            }))
        )
        .filter(response => response.ok)  //#F
        .do(() =>
            console.log('Withdraw suceeded. Creating transaction document'))
        .concatMap(() => writeTx$(
            new Transaction(name, 'withdraw', amount, type)));   //#G
}




withdraw$({
    name: 'Emmet Brown',
    accountId: '3',
    type: 'checking',
    amount: 1000
})
    .subscribe(
        tx    => console.log(`Transaction number: ${tx.id}`),
        error => console.log('Error: ' + error),
        ()    => console.log('Operation completed!!')
    );
