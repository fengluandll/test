var Concatenator = (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var MyClass = (function () {
    function MyClass(arg1) {
        this._name = arg1 + "_MyClass";
    }
    MyClass.prototype.toString = function () {
        return this._name;
    };
    return MyClass;
}());
var stringArray = ["first", "second", "third"];
var numberArray = [1, 2, 3];
var myArray = [new MyClass(1), new MyClass(2), new MyClass(3)];
var stringConcatenator = new Concatenator();
var numberConcatenator = new Concatenator();
var myArrayConcatentator = new Concatenator();
var stringResult = stringConcatenator.concatenateArray(stringArray);
var numberResult = numberConcatenator.concatenateArray(numberArray);
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);
//var stringResult2 = stringConcatenator.concatenateArray(numberArray);
//var numberResult2 = numberConcatenator.concatenateArray(stringArray);
var PersonPrinter = (function () {
    function PersonPrinter() {
    }
    PersonPrinter.prototype.print = function (arg) {
        console.log("Person born on "
            + arg.getDateOfBirth()
            + " is a "
            + arg.getPersonCategory()
            + " and is " +
            this.getPermissionString(arg)
            + "allowed to sign.");
    };
    PersonPrinter.prototype.getPermissionString = function (arg) {
        if (arg.canSignContracts())
            return "";
        return "NOT ";
    };
    return PersonPrinter;
}());
window.onload = function () {
    var personFactory = new PersonFactory();
    var personPrinter = new PersonPrinter();
    var child = personFactory.getPerson(new Date(2010, 0, 21));
    var adult = personFactory.getPerson(new Date(1969, 0, 21));
    var infant = personFactory.getPerson(new Date(2014, 0, 21));
    personPrinter.print(adult);
    personPrinter.print(child);
    personPrinter.print(infant);
};
var FirstClass = (function () {
    function FirstClass() {
    }
    return FirstClass;
}());
var SecondClass = (function () {
    function SecondClass() {
    }
    return SecondClass;
}());
//class GenericCreator< T > {
//    create(): T {
//       return new T();
//    }
//}
var GenericCreator = (function () {
    function GenericCreator() {
    }
    GenericCreator.prototype.create = function (arg1) {
        return new arg1();
    };
    return GenericCreator;
}());
var creator = new GenericCreator();
var firstClass = creator.create(FirstClass);
//var secondClass = creator.create(SecondClass); // error
