var x = 12;
var arr = [11,12,13];

var result = arr.find(function (value,index,array) {
    if(value == this){
        return true;
    }
},x);

console.log(result);