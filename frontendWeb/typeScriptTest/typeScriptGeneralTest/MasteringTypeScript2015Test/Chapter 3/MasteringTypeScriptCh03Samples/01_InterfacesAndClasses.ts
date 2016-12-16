//interface IComplexType {
    
//    constructor(arg1: any, arg2: any);
    
//}

interface IComplexType {
    id: number;
    name: string;
    print(): string;
    usingTheAnyKeyword(arg1: any): any;
    usingOptionalParameters(optionalArg1?: number);
    usingDefaultParameters(defaultArg1?: number);
    usingRestSyntax(...argArray: number []);
    usingFunctionCallbacks(callback: (id: number) => string);
}

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

class ComplexType implements IComplexType {
    id: number;
    name: string;
    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any)
    {
        this.id = idArg;
        this.name = nameArg;
        return this;
    }
    print(): string {
        return "id:" + this.id + " name:" + this.name;
    }
    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1;
    }
    usingOptionalParameters(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }
    usingDefaultParameters(defaultArg1: number = 0) {
        this.id = defaultArg1;
    }
    usingRestSyntax(...argArray: number []) {
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    }
    usingFunctionCallbacks( callback: (id: number) => string  ) {
        callback(this.id);
    }
    
}


var complexType: ComplexType = new ComplexType(1, "complexType");
var complexType_2: ComplexType = new ComplexType("1", "1");
//var complexType_3: ComplexType = new ComplexType(true, true);

complexType.usingTheAnyKeyword(true);
complexType.usingTheAnyKeyword({id: 1, name: "test"});
complexType.usingOptionalParameters(1);
complexType.usingOptionalParameters();
complexType.usingDefaultParameters(2);
complexType.usingDefaultParameters();
complexType.usingRestSyntax(1, 2, 3);
complexType.usingRestSyntax(1, 2, 3, 4, 5);
function myCallbackFunction(id: number): string {
    return id.toString();
}
complexType.usingFunctionCallbacks(myCallbackFunction);



//var complexType_2: ComplexType = new ComplexType(2, "complexType_2");

window.onload = () => {
    console.log(complexType.print());    
    console.log(complexType_2.print());    
}

//if (complexType == complexType_2) {
//    console.log("types are equal");
//}

