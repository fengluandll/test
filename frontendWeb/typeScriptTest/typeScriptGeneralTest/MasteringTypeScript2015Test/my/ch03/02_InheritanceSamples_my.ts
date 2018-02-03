interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class DerivedClassMy implements IDerivedFromBase {
    name: string;
    id: number;
}

class BaseClassMy implements IBase {
    id: number;
}

class DerivedFromBaseClassMy extends BaseClassMy implements IDerivedFromBase {
    name: string;
}

class BaseClassWithConstructorMy {
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    getProperties(): string {
        return "_id:" + this._id;
    }
}

class DerivedClassWithConstructorMy extends BaseClassWithConstructorMy {
    private _name: string;


    constructor(id: number, name: string) {
        super(id);
        this._name = name;
    }


    getProperties(): string {
        return "_name:" + this._name + ", " + super.getProperties();
    }
}

var myDerivedClass = new DerivedClassWithConstructorMy(1, "name");
console.log(myDerivedClass.getProperties());

