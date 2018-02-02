const webservice = "http://localhost:8000?symbol=FB";

const Money = function (currency, val) {
  return {
    currency: function () {
      return currency;
    },
    value: function () {
      return val;
    },
    toString: function () {
      return `${currency} ${val}`;  
    }
  };
};

const stockTicker$ = Rx.Observable.fromPromise(
     jQuery.get(webservice, {       
       format: 'json'
     }))
   .concatMap(result => Rx.Observable.from(result.list.resources))
   .map(resource => resource.resource.fields);

const twoSecond$ = Rx.Observable.interval(2000);

const lastUpdated = document.querySelector('#last-updated');

const updateSubscription = twoSecond$.subscribe(() => {
  let seconds = lastUpdated.innerHTML.trim();
  lastUpdated.innerHTML = new Date().toLocaleTimeString();
});

const USDMoney = Money.bind(null, 'USD');

Rx.Observable.combineLatest(
   stockTicker$, twoSecond$, (a, b) => a)   
  .do(() => console.log('tick'))
  .map(company =>[company.name, new USDMoney(company.price)])
  .cache()
  .catch(err => Rx.Observable.of(['Coming soon...','N/A']))
  .finally( () => {
      updateSubscription.unsubscribe();
  })
  .forEach(data => {
    [company, price] = data;              
    document.querySelector('#company').innerHTML = company;  
    document.querySelector('#price').innerHTML = price;  
   });