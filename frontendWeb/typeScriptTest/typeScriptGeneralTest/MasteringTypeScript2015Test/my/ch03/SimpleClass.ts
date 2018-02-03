class SimpleClass{
    private _id: number;

    get id() {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }
}

var simpleClass = new SimpleClass();

simpleClass.id = 1;

console.log(simpleClass);