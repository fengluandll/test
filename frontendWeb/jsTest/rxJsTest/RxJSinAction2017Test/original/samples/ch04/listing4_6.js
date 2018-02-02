/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

Rx.Observable.interval(2000)
    .timeInterval() // #A
    .skip(1)
    .take(5)
    .do(int =>
    console.log(`Checking every ${int.interval} milliseconds`)) // #B
    .map(int => new USDMoney(genRandomNumber(int.value))) // #C
    .forEach(price => {
        document.querySelector('#price').textContent = price;
    });
