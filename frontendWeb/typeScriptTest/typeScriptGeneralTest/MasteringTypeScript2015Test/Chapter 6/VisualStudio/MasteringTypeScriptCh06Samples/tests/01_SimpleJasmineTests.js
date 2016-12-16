describe("tests/01_SimpleJasmineTests.ts ", function () {
    it("value that has been assigned should be defined", function () {
        var undefinedValue = "test";
        expect(undefinedValue).toBeDefined();
    });
    it("shows some custom matchers", function () {
        var undefValue;
        expect(undefValue).not.toBeDefined();
        var definedValue = 2;
        expect(definedValue).not.toBe(null);
        expect(definedValue).toBe(2);
        expect(definedValue.toString()).toEqual("2");
        var trueValue = true;
        expect(trueValue).toBeTruthy();
        expect(trueValue).not.toBeFalsy();
        var stringValue = "this is a string";
        expect(stringValue).toContain("is");
        expect(stringValue).not.toContain("test");
    });
    describe("beforeEach and afterEach tests", function () {
        var myString;
        beforeEach(function () {
            myString = "this is a test string";
        });
        afterEach(function () {
            expect(myString).toBeUndefined();
        });
        it("should find then clear the myString variable", function () {
            expect(myString).toEqual("this is a test string");
            myString = undefined;
        });
    });
    describe("data driven tests", function () {
        using("valid values", [
            "first string",
            "second string",
            "third string"
        ], function (value) {
            it("should contain string (" + value + ")", function () {
                expect(value).toContain("string");
            });
        });
    });
    describe("simple spy", function () {
        it("should register a function call", function () {
            var classInstance = new MySpiedClass();
            spyOn(classInstance, 'testFunction');
            classInstance.testFunction("test");
            expect(classInstance.testFunction).toHaveBeenCalled();
        });
    });
    describe("using callback spies", function () {
        it("should execute callback with the correct string value", function () {
            var doCallback = new DoCallBack();
            var classUnderTest = new CallbackClass();
            spyOn(doCallback, 'logValue');
            classUnderTest.doCallBack(1, doCallback.logValue);
            expect(doCallback.logValue).toHaveBeenCalled();
            expect(doCallback.logValue).toHaveBeenCalledWith("id:1");
        });
    });
    describe("using fakes", function () {
        it("calls fake instead of real function", function () {
            var classToFake = new ClassToFake();
            spyOn(classToFake, 'getValue').and.callFake(function () {
                return 5;
            });
            expect(classToFake.getValue()).toBe(5);
        });
    });
    xdescribe("asynchronous tests", function () {
        it("failing test", function () {
            var mockAsync = new MockAsyncClass();
            var returnedValue;
            mockAsync.executeSlowFunction(function (value) {
                returnedValue = value;
            });
            expect(returnedValue).toEqual("success");
        });
    });
    describe("asynch tests with done", function () {
        var returnedValue;
        beforeEach(function (done) {
            returnedValue = "no_return_value";
            var mockAsync = new MockAsyncClass();
            mockAsync.executeSlowFunction(function (value) {
                returnedValue = value;
                done();
            });
        });
        it("should return success after 1 second", function (done) {
            expect(returnedValue).toEqual("success");
            done();
        });
    });
    describe("fixture tests", function () {
        it("modifies dom element", function () {
            setFixtures("<div id='my_div'></div>");
            var modifyDom = new ModifyDomElement();
            modifyDom.setHtml();
            var modifiedElement = $("#my_div");
            expect(modifiedElement.length).toBeGreaterThan(0);
            expect(modifiedElement.html()).toContain("Hello");
        });
    });
    describe("click event tests", function () {
        it("spies on click event element", function () {
            setFixtures("<div id='my_click_div' " + "onclick='handle_my_click_div_clicked'>Click Here</div>");
            var clickEventSpy = spyOnEvent("#my_click_div", "click");
            $('#my_click_div').click();
            expect(clickEventSpy).toHaveBeenTriggered();
        });
    });
});
function handle_my_click_div_clicked() {
    // do nothing at this time
}
var ModifyDomElement = (function () {
    function ModifyDomElement() {
    }
    ModifyDomElement.prototype.setHtml = function () {
        var elem = $("#my_div");
        elem.html("<p>Hello world</p>");
    };
    return ModifyDomElement;
})();
var ClassToFake = (function () {
    function ClassToFake() {
    }
    ClassToFake.prototype.getValue = function () {
        return 2;
    };
    return ClassToFake;
})();
var MySpiedClass = (function () {
    function MySpiedClass() {
    }
    MySpiedClass.prototype.testFunction = function (arg1) {
        console.log(arg1);
    };
    return MySpiedClass;
})();
function testFunction(arg1) {
    console.log(arg1);
}
var CallbackClass = (function () {
    function CallbackClass() {
    }
    CallbackClass.prototype.doCallBack = function (id, callback) {
        var callbackValue = "id:" + id.toString();
        callback(callbackValue);
    };
    return CallbackClass;
})();
var DoCallBack = (function () {
    function DoCallBack() {
    }
    DoCallBack.prototype.logValue = function (value) {
        console.log(value);
    };
    return DoCallBack;
})();
var MockAsyncClass = (function () {
    function MockAsyncClass() {
    }
    MockAsyncClass.prototype.executeSlowFunction = function (success) {
        setTimeout(function () {
            success("success");
        }, 1000);
    };
    return MockAsyncClass;
})();
//# sourceMappingURL=01_SimpleJasmineTests.js.map