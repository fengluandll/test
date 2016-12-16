var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DerivedClass = (function () {
    function DerivedClass() {
    }
    return DerivedClass;
})();

var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
})();

var DerivedFromBaseClass = (function (_super) {
    __extends(DerivedFromBaseClass, _super);
    function DerivedFromBaseClass() {
        _super.apply(this, arguments);
    }
    return DerivedFromBaseClass;
})(BaseClass);

var BaseClassWithConstructor = (function () {
    function BaseClassWithConstructor(id) {
        this._id = id;
    }
    BaseClassWithConstructor.prototype.getProperties = function () {
        return "_id:" + this._id;
    };
    return BaseClassWithConstructor;
})();

var DerivedClassWithConstructor = (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(id, name) {
        this._name = name;
        _super.call(this, id);
    }
    DerivedClassWithConstructor.prototype.getProperties = function () {
        return "_name:" + this._name + "," + _super.prototype.getProperties.call(this);
    };
    return DerivedClassWithConstructor;
})(BaseClassWithConstructor);

window.onload = function () {
    var myDerivedClass = new DerivedClassWithConstructor(1, "name");
    console.log(myDerivedClass.getProperties());
};
//# sourceMappingURL=02_InheritanceSamples.js.map
