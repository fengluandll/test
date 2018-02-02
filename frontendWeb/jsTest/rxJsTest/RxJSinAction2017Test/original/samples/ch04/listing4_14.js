/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const withdrawButton = document.querySelector("#withdraw");

Rx.Observable.fromEvent(withdrawButton, 'click')
  .throttleTime(2000) // #A
  .map(event => event.target.getAttribute('accountid'))
  .subscribe(account => {
     if(confirm('Are we you sure you want to withdraw?')) {
       proceedWithdraw(account);
     }
  });
