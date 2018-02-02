/**
  Chapter 8 full stock ticker using warm Observable
  Authors: Luis Atencio
           Paul Daniels
*/

function updateSymbol(symbol, price) {  
  document.querySelector('#company-info').innerHTML = 
    `<span class="quote"> ${symbol} </span> ${parseFloat(price).toFixed(2)}  `;
}

function updateChange(priceChange) {
  let priceClass = "GreenText", priceIcon="UpGreen";

  if(parseFloat(priceChange) < 0) { 
     priceClass = "RedText"; priceIcon="DownRed"; 
  }

  document.querySelector('#price-change').innerHTML = 
    `<span class="${priceClass}"><span class="${priceIcon}">(${parseFloat(Math.abs(priceChange)).toFixed(2)})</span></span>`;
}

const csv = str => str.split(/,\s*/);

// a = ask price
// s = symbol
// o = open price
const webservice = 'https://finance.yahoo.com/d/quotes.csv?s=$symbol&f=$options&e=.csv';
const symbol$ = Rx.Observable.of('FB');

const requestData$ = (symbol, opts = 'sa') => 
   Rx.Observable.fromPromise(get(symbol, opts))
      .map(response => response.replace(/\"|\s*/g, ''))
      .map(data => data.indexOf(',') > 0 ? csv(data) : data);

const twoSecond$ = Rx.Observable.interval(2000);

const get = (symbol, opts) => {
  return $.get(webservice.replace(/\$symbol/, symbol).replace(/\$options/, opts));
};

const fetchDataInterval$ = symbol => twoSecond$
     .mergeMap(() => requestData$(symbol)
          .distinctUntilChanged((previous, next) => {
              let prevPrice = parseFloat(previous[1]).toFixed(2);
              let nextPrice = parseFloat(next[1]).toFixed(2);
              return prevPrice === nextPrice;
          }));

const ticks$ = symbol$.mergeMap(fetchDataInterval$).share();
   
// 2 subscribers, however only one HTTP call
ticks$.subscribe(
  ([symbol, price]) => updateSymbol(symbol, price));

ticks$
  .map(data => parseFloat(data[1]).toFixed(2))
  .combineLatest(symbol$.mergeMap(symbol => requestData$(symbol, 'o')))
  .map(([current, open]) => (current - open).toFixed(2))
  .subscribe(updateChange);
