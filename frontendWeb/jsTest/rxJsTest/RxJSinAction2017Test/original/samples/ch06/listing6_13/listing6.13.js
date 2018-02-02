/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
Rx.Observable.forkJoin(symbols.map(requestQuote$))
    .subscribe(allPrices => {
        console.log('Total Portfolio Value: ' +
            new USDMoney(allPrices.reduce(add).toLocaleString()));
    });
