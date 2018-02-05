var Concatenator = (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ',';
            returnString += inputArray[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
console.log(new Concatenator().concatenateArray(["a", 'b', 'c']));
var MyClass = (function () {
    function MyClass(arg1) {
        this.name = arg1 + '_MyClass';
    }
    MyClass.prototype.toString = function () {
        return this.name;
    };
    return MyClass;
}());
var myArray = [new MyClass(1), new MyClass(2), new MyClass(3)];
var myArrayConcatentator = new Concatenator();
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);
