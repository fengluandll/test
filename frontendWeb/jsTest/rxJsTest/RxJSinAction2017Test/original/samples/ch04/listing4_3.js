/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
 
Rx.Observable.timer(1000)  
  .subscribe(()=> 
       document.querySelector('#panel')
         .setAttribute('style', 'slide-right'));
