
class Concatenator< T > {
    concatenateArray(inputArray: Array< T >): string {
        var returnString = "";

        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    }
}

class MyClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1 + "_MyClass";
    }
    toString(): string {
        return this._name;
    }
}

var stringArray: string[] = ["first", "second", "third"];
var numberArray: number[] = [1, 2, 3];
var myArray: MyClass[] = [new MyClass(1), new MyClass(2), new MyClass(3)];

var stringConcatenator = new Concatenator<string>();
var numberConcatenator = new Concatenator<number>();
var myArrayConcatentator = new Concatenator<MyClass>();

var stringResult = stringConcatenator.concatenateArray(stringArray);
var numberResult = numberConcatenator.concatenateArray(numberArray);
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);

//var stringResult2 = stringConcatenator.concatenateArray(numberArray);
//var numberResult2 = numberConcatenator.concatenateArray(stringArray);


class PersonPrinter<T extends IPerson> implements IPersonPrinter<T> {
    print(arg: T) {
        console.log("Person born on "
            + arg.getDateOfBirth()
            + " is a "
            + arg.getPersonCategory()
            + " and is " +
            this.getPermissionString(arg)
            + "allowed to sign."
        );
    }
    getPermissionString(arg: T) {
        if (arg.canSignContracts())
            return "";
        return "NOT ";
    }
}

window.onload = () => {
    var personFactory = new PersonFactory();
    var personPrinter = new PersonPrinter<IPerson>();

    var child = personFactory.getPerson(new Date(2010, 0, 21));
    var adult = personFactory.getPerson(new Date(1969, 0, 21));
    var infant = personFactory.getPerson(new Date(2014, 0, 21));
    
    personPrinter.print(adult);
    personPrinter.print(child);
    personPrinter.print(infant);

    
}

interface IPersonPrinter<T extends IPerson> {
    print(arg: T) : void;
    getPermissionString(arg: T): string;
}

class FirstClass {
    id: number;
}

class SecondClass {
    name: string;
}

//class GenericCreator< T > {
//    create(): T {
//       return new T();
//    }
//}

class GenericCreator< T > {
    create(arg1: { new(): T }) : T {
        return new arg1();
    }
}

var creator = new GenericCreator<FirstClass>();
var firstClass : FirstClass = creator.create(FirstClass);
//var secondClass = creator.create(SecondClass); // error




