
/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const sourceAccount = document.querySelector('#source');
const destinationAccount = document.querySelector('#destination');
const helpMsg = document.querySelector('#help');

var createCheck$ = function(elem) {
  return Rx.Observable.fromEvent(elem, 'click')
    .filter(event => event.target.checked)
    .map(event => event.target.value);
};

Rx.Observable.merge(
    createCheck$(sourceAccount), createCheck$(destinationAccount))
.bufferTime(10000) 
.filter(buff => buff.length === 2) 
.do(accounts => console.log(`Selected:  ${accounts}`)) 
.subscribe(accounts => {
    helpMsg.innerHTML = 'Add transfer amount and complete payment';
});
