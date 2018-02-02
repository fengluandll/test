/**
 *  RxJS in action 
 *  Chapter 4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
 
const source$ = Rx.Observable.create(observer => { // #A
    const timeoutId = setTimeout(() => {
      observer.next();   // #B
      observer.completed();  // #B
    }, 1000); 

    return () => clearTimeout(timeoutId); 
  });                                       

  source$.subscribe(() =>  
    document.querySelector('#panel')
          .setAttribute('style', 'slide-right'));                                                                