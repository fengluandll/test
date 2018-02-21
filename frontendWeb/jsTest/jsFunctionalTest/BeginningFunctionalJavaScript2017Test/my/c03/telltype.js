var tellType = arg => console.log(typeof arg);

let data = 1;
tellType(data);

var dataFn = () => {
    console.log("I'm a function")
}
tellType(dataFn)