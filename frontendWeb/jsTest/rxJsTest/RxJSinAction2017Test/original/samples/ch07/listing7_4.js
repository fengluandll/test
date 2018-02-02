class Try {               
    constructor(val) {
      this._val = val;
    }
  
    static of(val) {
       if(val === null || val.constructor === Error 
          || val instanceof Error) {
	    	return new Failure(val);
	   }      
       return new Success(val);
    }    
  
    map(fn) {
       try {
          return Try.of(fn(this._val));
       } 
       catch (e) { 
          return Try.of(e);
       }
    }
}

class Success extends Try {
  
   getOrElse(anotherVal) {
     return this._val;
   }  
}

class Failure extends Try {
  
  map(fn) {
    return this;
  }
  
  getOrElse(anotherVal) {
     return anotherVal;
   }
}
  
toUpper = str => str.toUpperCase(); 

// Exercises
console.log(Try.of(new Error('')).map(toUpper).constructor);
console.log(Try.of('abc').map(toUpper).getOrElse());
console.log(Try.of('abc').map(toUpper).constructor);

