/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

  const webservice = 'http://finance.yahoo.com/webservice/v1/symbols'; //#A
  const currency = 'usd';

  const requestQuote$ = symbol =>
    Rx.Observable.fromPromise( //#B
      makeHttpCall(`${webservice}/${symbol}/${currency}/quote`,
        {format: 'json'})) //#C
      .map(result => result.list.resources[0]); //#D
