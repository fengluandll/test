
class TcBaseClass {
    id: number;
    constructor(idArg: number) {
        this.id = idArg;
    }
}

class TcDerivedClass extends TcBaseClass {
    name: string;
    constructor(idArg: number, nameArg: string) {
        super(idArg);
        this.name = name;
    }
    print() {
        console.log(this.id + " " + this.name);
    }
}

window.onload = () => {
    var base = new TcBaseClass(1);
    var derived = new TcDerivedClass(2, "second");

    console.log("typeof base: " + typeof base);
    console.log("typeof derived: " + typeof derived);

    console.log("typeof TcBaseClass: " + typeof TcBaseClass);
    console.log("typeof TcDerivedClass: " + typeof TcDerivedClass);

    console.log("typeof base.id: " +  typeof base.id);
    console.log("typeof derived.name: " +  typeof derived.name);
    console.log("typeof derived.print: " + typeof derived.print);
}


interface IBasicObject {
    id: number;
    name: string;
    print(): void;
}

class BasicObject implements IBasicObject {
    id: number;
    name: string;
    constructor(idArg: number, nameArg: string) {
        this.id = idArg;
        this.name = nameArg;
    }
    print() {
        console.log("id:" + this.id + ", name" + this.name);
    }
}

class FunctionChecker {
    static implementsFunction(objectToCheck: any, functionName: string): boolean {
        return (objectToCheck[functionName] != undefined &&
            typeof objectToCheck[functionName] == 'function');
    }
}




interface IInterfaceChecker {
    methodNames?: string[];
    propertyNames?: string[];
}

class IIBasicObject implements IInterfaceChecker {
    methodNames: string[] = ["print"];
    propertyNames: string[] = ["id", "name"];
}

class InterfaceChecker<T extends IInterfaceChecker> {
    implementsInterface(classToCheck: any,
        t: { new (): T; }): boolean
    {
        var targetInterface = new t();
        var i, len: number;
        for (i = 0, len = targetInterface.methodNames.length; i < len; i++) {
            var method: string = targetInterface.methodNames[i];
            if (!classToCheck[method] ||
                typeof classToCheck[method] !== 'function') {
                console.log("Function :" + method + " not found");
                return false;
            }
        }
        for (i = 0, len = targetInterface.propertyNames.length; i < len; i++) {
            var property: string = targetInterface.propertyNames[i];
            if (!classToCheck[property] ||
                typeof classToCheck[property] == 'function') {
                console.log("Property :" + property + " not found");
                return false;
            }
        }
        return true;
    }
}

window.onload = () => {
    var myClass = new BasicObject(1, "name");
    
    var interfaceChecker = new InterfaceChecker();

    var isValid = interfaceChecker.implementsInterface(myClass, IIBasicObject);

    console.log("myClass implements the IIBasicObject interface :" + isValid);

    var noPrintFunction = { id: 1, name: "name" };
    isValid = interfaceChecker.implementsInterface(noPrintFunction, IIBasicObject);
    console.log("noPrintFunction implements the IIBasicObject interface :" + isValid);

    var myClass = new BasicObject(1, "name");
    var isValidFunction = FunctionChecker.implementsFunction(myClass, "print");
    console.log("myClass implements the print() function :" + isValidFunction);
    isValidFunction = FunctionChecker.implementsFunction(myClass, "alert");
    console.log("myClass implements the alert() function :" + isValidFunction);
}

