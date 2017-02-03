var MyClass = (function () {
    function MyClass() {
        this._count = 0;
    }
    MyClass.prototype.countUp = function () {
        this._count++;
    };
    MyClass.prototype.getCount = function () {
        return this._count;
    };
    return MyClass;
}());
var classInstance = new MyClass();
//console.log(classInstance._count);
console.log(classInstance.getCount());
