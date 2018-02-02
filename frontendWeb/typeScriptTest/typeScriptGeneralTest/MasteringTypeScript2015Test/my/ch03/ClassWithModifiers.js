var ClassWithModifiers = (function () {
    function ClassWithModifiers(id, name) {
        this._id = id;
        this._name = name;
    }
    ClassWithModifiers.prototype.modifyId = function (id) {
        this._id = id;
        this.updateNameFromId();
    };
    ClassWithModifiers.prototype.updateNameFromId = function () {
        this._name = this._id.toString() + "_name";
    };
    return ClassWithModifiers;
}());
var myClass = new ClassWithModifiers(1, "name");
myClass.modifyId(2);
// myClass._id = 2;
// myClass.updateNameFromId();
console.log(myClass);
