/**
 *  RxJS in action 
 *  Chapter 2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

function* fibonacci() { 
  var first = 1, second = 1; 
  for (;;) {                   
    var sum = second + first;
    yield sum;  
    first = second;
    second = sum;
  }                            
}

var iter = fibonacci(); 
iter.next(); //-> {value: 2, done: false}
iter.next(); //-> {value: 3, done: false}
iter.next(); //-> {value: 5, done: false}
