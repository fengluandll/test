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
var IIBasicObject = (function () {
    function IIBasicObject() {
        this.methodNames = ["print"];
        this.propertyNames = ["id", "name"];
        this.className = "IIBasicObject";
    }
    return IIBasicObject;
})();
//# sourceMappingURL=BasicObject.js.map