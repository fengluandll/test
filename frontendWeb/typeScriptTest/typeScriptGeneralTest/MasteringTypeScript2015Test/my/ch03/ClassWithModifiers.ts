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
        this._name = this._id.toString() + "_name";
    }
}

var myClass = new ClassWithModifiers(1, "name");
myClass.modifyId(2);
// myClass._id = 2;
// myClass.updateNameFromId();

console.log(myClass);

