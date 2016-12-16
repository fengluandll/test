var IIHasIdProperty = (function () {
    function IIHasIdProperty() {
        this.propertyNames = ["id"];
        this.className = "IIHasIdProperty";
    }
    return IIHasIdProperty;
})();
//class Property extends IIProperty implements IProperty  {
var PropertyOne = (function () {
    function PropertyOne() {
        this.id = 1;
    }
    return PropertyOne;
})();
var PropertyTwo = (function () {
    function PropertyTwo() {
        this.id = 2;
    }
    return PropertyTwo;
})();
var NoProperty = (function () {
    function NoProperty() {
        this.myId = 3;
    }
    return NoProperty;
})();
var UsingProperty = (function () {
    function UsingProperty() {
        this.property = TypeScriptTinyIoC.resolve(IIHasIdProperty);
    }
    return UsingProperty;
})();
var IINoProperty = (function () {
    function IINoProperty() {
        this.propertyNames = ["myId"];
        this.className = "IINoProperty";
    }
    return IINoProperty;
})();
describe("/tscode/tests/InterfaceCheckerTests.ts", function () {
    it("BasicObject should implement IIBasicObject interface", function () {
        var basicObject = new BasicObject(1, "firstArg");
        var interfaceChecker = new InterfaceChecker();
        expect(interfaceChecker.implementsInterface(basicObject, IIBasicObject)).toBeTruthy();
    });
    it("should register instance of PropertyOne with TinyIoc", function () {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
    });
    it("should register intance of PropertyTwo with TinyIoc", function () {
        var propertyInstance = new PropertyTwo();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
    });
    it("should resolve instance of IIProperty to PropertyTwo", function () {
        var propertyInstance = new PropertyTwo();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
        var iProperty = TypeScriptTinyIoC.resolve(IIHasIdProperty);
        expect(iProperty.id).toBe(2);
    });
    it("should resolve instance of IIProperty to PropertyOne", function () {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        //expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
        var iProperty = TypeScriptTinyIoC.resolve(IIHasIdProperty);
        expect(iProperty.id).toBe(1);
    });
    it("should throw if class does not implement interface", function () {
        var propertyInstance = new NoProperty();
        expect(function () {
            TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        }).toThrowError();
    });
    it("should throw if cannot resolve ", function () {
        expect(function () {
            TypeScriptTinyIoC.resolve(IINoProperty);
        }).toThrowError();
    });
    it("should clear all registered instances", function () {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        TypeScriptTinyIoC.unregister(IIHasIdProperty);
        //TypeScriptTinyIoC.clearAll();
        expect(function () {
            TypeScriptTinyIoC.resolve(IIHasIdProperty);
        }).toThrowError();
    });
    it("should clear all registered instances", function () {
        var propertyOneInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyOneInstance, IIHasIdProperty);
        //TypeScriptTinyIoC.register(propertyOneInstance, new IIHasIdProperty());
        var usingProperty = new UsingProperty();
        expect(usingProperty.property.id).toBe(1);
    });
});
//# sourceMappingURL=InterfaceCheckerTests.js.map