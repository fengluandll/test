
declare module ErrorHelper {
    function containsErrors(response: IResponse);
    function containsErrors(response: IResponseString);
    function trace(message: string);
    function trace(message: IResponse);
    function trace(message: IResponseString);
}

interface IResponse {
    responseText: IFailureMessage;
}

interface IFailureMessage {
    failure: boolean;
    errorMessage: string;
}

interface IResponseString {
    responseText: IFailureMessageString;
}

interface IFailureMessageString {
    failure: string;
    errorMessage: string;
}

declare module FirstNamespace {
    module SecondNamespace {
        module ThirdNamespace {
            function log(msg: string);
        }
    }
}

declare class MyClass {
    constructor(id: number, name: string);
    constructor();
}

declare class ClassWithProperty {
    id: number;
}

declare class StaticClass {
    static staticId: number;
    static staticFunction();
}

declare class ClassWithFunction {
    functionToRun(): void;
}

declare function globalLogError(msg: string);

declare function describe(name: string, functionDef: () => void);

interface IOptionalProperties {
    id?: number;
    name?: string;
}

declare class ClassWithOptionals {
    constructor(options?: IOptionalProperties);
}

declare function fnWithProperty(id: number);
declare module fnWithProperty {
    var name: string;
}

declare function trace(arg: string);
declare function trace(arg: boolean);
declare function trace(arg: number);
declare function trace(arg: { id: number; name: string });

//OuterName.InnerName.NestedClass();
declare module OuterName {
    module InnerName {
        class NestedClass {}
    }
}



