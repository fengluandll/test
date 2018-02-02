/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const USDMoney = Money.bind(null, 'USD'); // #A

Rx.Observable.interval(2000) //#B
    .skip(1) //#C
    .take(5) //#D
    .map(num => new USDMoney(newRandomNumber(num)))
    .forEach(price => {
        document.querySelector('#price').textContent = price;
    });
