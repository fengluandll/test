/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

// HTML elements
const amountFields = document.querySelectorAll('.amount-field'); // #A
const transferButton = document.querySelector('#transfer');
const completeMsg = document.querySelector('#message');

// Helper functions
const empty = val => !val || val === '' || val.length === 0; // #B
const validNum = val => !Number.isNaN(parseFloat(val)); // #C
const negate = function (func) { // #D
   return function() {
      return !func.apply(null, arguments);
   };
};

Rx.Observable.fromEvent(amountFields, 'keyup')
  .debounceTime(500) //#E
  .map(event => event.target.value)
  .filter(negate(empty)) // #F
  .bufferWhen(() => Rx.Observable.fromEvent(transferButton, 'click'))  // #G
  .map(amounts => amounts.every(validNum)) //#H
  .subscribe(isValid => {  
     if(!isValid) { 
        completeMsg.innerHTML = 'Entered invalid amounts!'; // #I
     }  
     else {
       completeMsg.innerHTML = 'Amounts are valid!';
       performTransfer(...);
     }  
  });
