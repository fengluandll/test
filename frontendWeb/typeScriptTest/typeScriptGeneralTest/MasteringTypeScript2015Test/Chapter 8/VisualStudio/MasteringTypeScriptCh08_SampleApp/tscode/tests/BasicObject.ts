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

class IIBasicObject implements IInterfaceChecker {
    methodNames: string[] = ["print"];
    propertyNames: string[] = ["id", "name"];
    className: string = "IIBasicObject";
}

