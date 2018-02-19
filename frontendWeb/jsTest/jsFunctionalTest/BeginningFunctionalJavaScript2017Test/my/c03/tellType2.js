var tellType = arg => {
    "use strict";
    if (typeof arg === 'function') {
        arg();
    }else {
        console.log("The passed data is " + arg)
    }

};

var dataFn = () => { console.log("I'm a function") };

tellType(dataFn);