
interface IHasIdProperty {
    id: number;
}

class IIHasIdProperty implements IInterfaceChecker {
    propertyNames: string[] = ["id"];
    className: string = "IIHasIdProperty";
}

//class Property extends IIProperty implements IProperty  {
class PropertyOne implements IHasIdProperty  {
    id = 1;
}

class PropertyTwo implements IHasIdProperty {
    id = 2;
}

class NoProperty {
    myId = 3;
}


class UsingProperty {
    property: IHasIdProperty;
    constructor() {
        this.property = TypeScriptTinyIoC.resolve(IIHasIdProperty);
    }
}

class IINoProperty implements IInterfaceChecker {
    propertyNames: string[] = ["myId"];
    className: string = "IINoProperty";
}

describe("/tscode/tests/InterfaceCheckerTests.ts", () => {
    it("BasicObject should implement IIBasicObject interface", () => {
        var basicObject = new BasicObject(1, "firstArg");
        var interfaceChecker = new InterfaceChecker();
        expect(interfaceChecker.implementsInterface(basicObject, IIBasicObject)).toBeTruthy();
    });

    it("should register instance of PropertyOne with TinyIoc", () => {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);

        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
    });

    it("should register intance of PropertyTwo with TinyIoc", () => {
        var propertyInstance = new PropertyTwo();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);

        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();
    });

    it("should resolve instance of IIProperty to PropertyTwo", () => {
        var propertyInstance = new PropertyTwo();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);

        expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();

        var iProperty: IHasIdProperty = TypeScriptTinyIoC.resolve(IIHasIdProperty);
        expect(iProperty.id).toBe(2);
    });

    it("should resolve instance of IIProperty to PropertyOne", () => {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);

        //expect(TypeScriptTinyIoC.registeredClasses['IIHasIdProperty']).toBeDefined();

        var iProperty: IHasIdProperty = TypeScriptTinyIoC.resolve(IIHasIdProperty);
        expect(iProperty.id).toBe(1);
    });

    it("should throw if class does not implement interface", () => {
        var propertyInstance = new NoProperty();
        expect(() =>
            {
            TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty); 
            }
        ).toThrowError();
        
    });

    it("should throw if cannot resolve ", () => {
        expect(() => {
            TypeScriptTinyIoC.resolve(IINoProperty);
        }
            ).toThrowError();

    });

    it("should clear all registered instances", () => {
        var propertyInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyInstance, IIHasIdProperty);
        TypeScriptTinyIoC.unregister(IIHasIdProperty);
        //TypeScriptTinyIoC.clearAll();
        expect(() => {
            TypeScriptTinyIoC.resolve(IIHasIdProperty);
        }
            ).toThrowError();

    });

    it("should clear all registered instances", () => {
        var propertyOneInstance = new PropertyOne();
        TypeScriptTinyIoC.register(propertyOneInstance, IIHasIdProperty);
        //TypeScriptTinyIoC.register(propertyOneInstance, new IIHasIdProperty());

        var usingProperty = new UsingProperty();
        expect(usingProperty.property.id).toBe(1);


    });
});

//http://www.martinfowler.com/articles/injection.html