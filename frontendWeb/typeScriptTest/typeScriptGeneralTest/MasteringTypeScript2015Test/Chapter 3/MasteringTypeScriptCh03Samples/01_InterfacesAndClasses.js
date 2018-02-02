//interface IComplexType {
//var complexType: IComplexType = {
//    id: 1,
//    name: "complexType",
//    print(): string {
//        return "id:" + this.id + " name:" + this.name;
//    }
//};
//var complexType_2 : IComplexType = {
//    id: 1,
//    name: "complexType_2",
//    print(): string {
//        return "id:" + this.id + " name:" + this.name;
//    }
//}
var ComplexType = (function () {
    function ComplexType(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
        return this;
    }
    ComplexType.prototype.print = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    ComplexType.prototype.usingOptionalParameters = function (optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    };
    ComplexType.prototype.usingDefaultParameters = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingFunctionCallbacks = function (callback) {
        callback(this.id);
    };
    return ComplexType;
}());
var complexType = new ComplexType(1, "complexType");
var complexType_2 = new ComplexType("1", "1");
//var complexType_3: ComplexType = new ComplexType(true, true);
complexType.usingTheAnyKeyword(true);
complexType.usingTheAnyKeyword({ id: 1, name: "test" });
complexType.usingOptionalParameters(1);
complexType.usingOptionalParameters();
complexType.usingDefaultParameters(2);
complexType.usingDefaultParameters();
complexType.usingRestSyntax(1, 2, 3);
complexType.usingRestSyntax(1, 2, 3, 4, 5);
function myCallbackFunction(id) {
    return id.toString();
}
complexType.usingFunctionCallbacks(myCallbackFunction);
//var complexType_2: ComplexType = new ComplexType(2, "complexType_2");
window.onload = function () {
    console.log(complexType.print());
    console.log(complexType_2.print());
};
//if (complexType == complexType_2) {
//    console.log("types are equal");
//}
