/**
 *  RxJS in Action
 *  Listing 4.4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

var Rx = require('rxjs');

const Money = function (currency, val) {
  return {
    value: function () {
      return this.val;
    },
    currency: function () {
      return this.currency;
    },
    toString: function () {
      return `${currency} ${val}`;
    }
  };
};

const newRandomNumber = () => Math.floor(Math.random() * 100);

const USDMoney = Money.bind(null, 'USD');

Rx.Observable.interval(2000)
  .skip(0)
  .take(5)
  .map(num => new USDMoney(newRandomNumber()))
  // WARNING: NOT IN TEXT
  // Added to address #11 (https://github.com/RxJSInAction/rxjs-in-action/issues/11)
  .map(usd => usd.toString())
  .forEach(console.log);
