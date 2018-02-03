class Concatenator<T>{
    concatenateArray(inputArray: Array<T>): string{
        var returnString = "";

        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ',';
            returnString += inputArray[i].toString();
        }

        return returnString;
    }
}

console.log(new Concatenator<string>().concatenateArray(["a", 'b', 'c']));

class MyClass {
    private name: string;

    constructor(arg1: number) {
        this.name = arg1 + '_MyClass';
    }

    toString(): string{
        return this.name;
    }
}

var myArray: MyClass[] = [new MyClass(1), new MyClass(2), new MyClass(3)];
var myArrayConcatentator = new Concatenator < MyClass > ();
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);
