var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TcBaseClass = (function () {
    function TcBaseClass(idArg) {
        this.id = idArg;
    }
    return TcBaseClass;
})();

var TcDerivedClass = (function (_super) {
    __extends(TcDerivedClass, _super);
    function TcDerivedClass(idArg, nameArg) {
        _super.call(this, idArg);
        this.name = name;
    }
    TcDerivedClass.prototype.print = function () {
        console.log(this.id + " " + this.name);
    };
    return TcDerivedClass;
})(TcBaseClass);

window.onload = function () {
    var base = new TcBaseClass(1);
    var derived = new TcDerivedClass(2, "second");

    console.log("typeof base: " + typeof base);
    console.log("typeof derived: " + typeof derived);

    console.log("typeof TcBaseClass: " + typeof TcBaseClass);
    console.log("typeof TcDerivedClass: " + typeof TcDerivedClass);

    console.log("typeof base.id: " + typeof base.id);
    console.log("typeof derived.name: " + typeof derived.name);
    console.log("typeof derived.print: " + typeof derived.print);
};

var BasicObject = (function () {
    function BasicObject(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
    }
    BasicObject.prototype.print = function () {
        console.log("id:" + this.id + ", name" + this.name);
    };
    return BasicObject;
})();

var FunctionChecker = (function () {
    function FunctionChecker() {
    }
    FunctionChecker.implementsFunction = function (objectToCheck, functionName) {
        return (objectToCheck[functionName] != undefined && typeof objectToCheck[functionName] == 'function');
    };
    return FunctionChecker;
})();

var IIBasicObject = (function () {
    function IIBasicObject() {
        this.methodNames = ["print"];
        this.propertyNames = ["id", "name"];
    }
    return IIBasicObject;
})();

var InterfaceChecker = (function () {
    function InterfaceChecker() {
    }
    InterfaceChecker.prototype.implementsInterface = function (classToCheck, t) {
        var targetInterface = new t();
        var i, len;
        for (i = 0, len = targetInterface.methodNames.length; i < len; i++) {
            var method = targetInterface.methodNames[i];
            if (!classToCheck[method] || typeof classToCheck[method] !== 'function') {
                console.log("Function :" + method + " not found");
                return false;
            }
        }
        for (i = 0, len = targetInterface.propertyNames.length; i < len; i++) {
            var property = targetInterface.propertyNames[i];
            if (!classToCheck[property] || typeof classToCheck[property] == 'function') {
                console.log("Property :" + property + " not found");
                return false;
            }
        }
        return true;
    };
    return InterfaceChecker;
})();

window.onload = function () {
    var myClass = new BasicObject(1, "name");

    var interfaceChecker = new InterfaceChecker();

    var isValid = interfaceChecker.implementsInterface(myClass, IIBasicObject);

    console.log("myClass implements the IIBasicObject interface :" + isValid);

    var noPrintFunction = { id: 1, name: "name" };
    isValid = interfaceChecker.implementsInterface(noPrintFunction, IIBasicObject);
    console.log("noPrintFunction implements the IIBasicObject interface :" + isValid);

    var myClass = new BasicObject(1, "name");
    var isValidFunction = FunctionChecker.implementsFunction(myClass, "print");
    console.log("myClass implements the print() function :" + isValidFunction);
    isValidFunction = FunctionChecker.implementsFunction(myClass, "alert");
    console.log("myClass implements the alert() function :" + isValidFunction);
};
//# sourceMappingURL=06_RunTimeTypeCheckingTypeScript.js.map
