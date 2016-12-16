
interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class DerivedClass implements IDerivedFromBase {
    id: number;
    name: string;
}

class BaseClass implements IBase {
    id : number;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string;
}

class BaseClassWithConstructor {
    private _id: number;
    constructor(id: number) {
        this._id = id;
    }
    getProperties(): string {
        return "_id:" + this._id;
    }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
    private _name: string;
    constructor(id: number, name: string) {
        this._name = name;
        super(id);
    }
    getProperties(): string {
        return "_name:" + this._name + "," + super.getProperties();
    }
}


window.onload = () => {
    var myDerivedClass = new DerivedClassWithConstructor(1, "name");
    console.log(
        myDerivedClass.getProperties()
    );
}

