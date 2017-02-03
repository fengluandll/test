class MyClass{
    private _count: number;
    constructor(){
        this._count = 0;
    }

    countUp(){
        this._count++;
    }
    getCount(){
        return this._count;
    }
}

var classInstance = new MyClass();
//console.log(classInstance._count);
console.log(classInstance.getCount());