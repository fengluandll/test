class ClassWithModifiers {
    private _id: number;
    private _name: string;
    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }
    modifyId(id: number) {
        this._id = id;
        this.updateNameFromId();
    }
    private updateNameFromId() {
        this._name = this._id.toString();
    }
}

var myClass = new ClassWithModifiers(1, "name");
myClass.modifyId(2);
//myClass._id = 2;
//myClass.updateNameFromId();

class ClassWithAutomaticProperties {
    constructor(public id: number, private name: string) {
    }
    print(): void {
        console.log("id:" + this.id + " name:" + this.name);
    }
}

var myAutoClass = new ClassWithAutomaticProperties(1, "name");
myAutoClass.id = 2;
//myAutoClass.name = "test";

class SimpleClass {
    public id: number;
}

var mySimpleClass = new SimpleClass();
mySimpleClass.id = 1;

class SimpleClassWithAccessors {
    private _id: number;
    get id() {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
}

var mySimpleAccClass = new SimpleClassWithAccessors();
mySimpleClass.id = 1;
console.log("id has the value of " + mySimpleClass.id);

class ClassWithFunction {
    printOne() {
        console.log("1");
    }
}

var myClassWithFunction = new ClassWithFunction();
myClassWithFunction.printOne();


class ClassWithStaticFunction {
    static printTwo() {
        console.log("2");
    }
}

ClassWithStaticFunction.printTwo();

class PersonType {
    static INFANT: string = "Infant";
    static CHILD: string = "Child";
    static ADULT: string = "Adult";
}

var value = "test";
if (value === "Infant") {
    // do something with an infant.
}

if (value === PersonType.INFANT) {
    // do something with an infant.
}


