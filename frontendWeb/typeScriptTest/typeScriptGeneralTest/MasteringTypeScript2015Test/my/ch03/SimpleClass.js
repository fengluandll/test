var SimpleClass = (function () {
    function SimpleClass() {
    }
    Object.defineProperty(SimpleClass.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleClass;
}());
var simpleClass = new SimpleClass();
simpleClass.id = 1;
console.log(simpleClass);
