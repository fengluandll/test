window.onload = function () {
    var failureMessage = {
        responseText: { "failure": true, "errorMessage": "Unhandled Exception" }
    };
    if (ErrorHelper.containsErrors(failureMessage))
        ErrorHelper.trace(failureMessage);
    var anotherFailure = {
        responseText: {
            failure: false,
            errorMessage: "",
            success: true
        }
    };
    if (ErrorHelper.containsErrors(anotherFailure))
        ErrorHelper.trace(failureMessage);
    var failureMessageString = {
        responseText: { "failure": "true", "errorMessage": "Error Message" }
    };
    if (ErrorHelper.containsErrors(failureMessageString))
        ErrorHelper.trace(failureMessage);
    ErrorHelper.trace("true");
    // Module definition rules
    // TypeScript useage :
    FirstNamespace.SecondNamespace.ThirdNamespace.log("test");
    var myClass = new MyClass();
    var myClass2 = new MyClass(1, "test");
    var classWithProperty = new ClassWithProperty();
    classWithProperty.id = 1;
    var classWithFunction = new ClassWithFunction();
    classWithFunction.functionToRun();
    StaticClass.staticId = 1;
    StaticClass.staticFunction();
    globalLogError("test");
    describe("test", function () {
        console.log("inside the test function");
    });
    var classWithOpt = new ClassWithOptionals();
    var classWithOpt1 = new ClassWithOptionals({ id: 1 });
    var classWithOpt2 = new ClassWithOptionals({ name: "first" });
    var classWithOpt3 = new ClassWithOptionals({ id: 2, name: "second" });
    fnWithProperty(1);
    fnWithProperty.name = "name";
    trace("trace a string");
    trace(true);
    trace(1);
    trace({ id: 1, name: "test" });
    var myNestedClass = new OuterName.InnerName.NestedClass();
    MergedModule.functionA();
    MergedModule.functionB();
};
//# sourceMappingURL=ErrorHelperTypeScript.js.map