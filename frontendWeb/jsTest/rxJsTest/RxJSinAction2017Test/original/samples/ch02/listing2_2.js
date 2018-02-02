/**
 *  RxJS in action 
 *  Chapter 2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

function BufferIterator(arr, bufferSize = 2) {  
    this[Symbol.iterator] = function () {  
        var nextIndex = 0;
      
        return {
            next: function () {  
              if(nextIndex >= arr.length) {
                return {done: true}; 
              }
              else {
                var _buffer = new Array(bufferSize);
                for(let i = 0; i < bufferSize; i++) {  
                  _buffer[i] = (arr[nextIndex++]);                 
                }                
                return {value: _buffer, done: false};                   
              }
            }
        }
    };
}

const arr = [1, 2, 3, 4, 5, 6];

for (let i of new BufferIterator(arr, 2)) { 
    console.log(i);
}
//-> [1, 2] [3, 4] [5, 6]

for (let i of new BufferIterator(arr, 3)) { 
    console.log(i);
}
//-> [1, 2, 3] [4, 5, 6]
