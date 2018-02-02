/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

(function (Rx) {
  const twoSecond$ = Rx.Observable.interval(2000);  

  const fetchDataInterval$ = symbol => twoSecond$
    .mergeMap(() => requestQuote$(symbol))
    .map(obj => obj.resource.fields);

// Now you can call this stream with a stock symbol, in this case “FB.”
  fetchDataInterval$('FB')
    .subscribe(({symbol, price})=>
      console.log(`${symbol}, ${price}`)
    );

})(Rx.KitchenSink);
