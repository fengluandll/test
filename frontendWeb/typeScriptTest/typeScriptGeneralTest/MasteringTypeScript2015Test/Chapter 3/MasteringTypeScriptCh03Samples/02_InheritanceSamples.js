var __extends = (this && this.__extends) || (function () {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DerivedClass = (function () {
    function DerivedClass() {
    }
    return DerivedClass;
}());
var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var DerivedFromBaseClass = (function (_super) {
    __extends(DerivedFromBaseClass, _super);
    function DerivedFromBaseClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedFromBaseClass;
}(BaseClass));
var BaseClassWithConstructor = (function () {
    function BaseClassWithConstructor(id) {
        this._id = id;
    }
    BaseClassWithConstructor.prototype.getProperties = function () {
        return "_id:" + this._id;
    };
    return BaseClassWithConstructor;
}());
var DerivedClassWithConstructor = (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(id, name) {
        var _this = this;
        _this._name = name;
        _this = _super.call(this, id) || this;
        return _this;
    }
    DerivedClassWithConstructor.prototype.getProperties = function () {
        return "_name:" + this._name + "," + _super.prototype.getProperties.call(this);
    };
    return DerivedClassWithConstructor;
}(BaseClassWithConstructor));
window.onload = function () {
    var myDerivedClass = new DerivedClassWithConstructor(1, "name");
    console.log(myDerivedClass.getProperties());
};
