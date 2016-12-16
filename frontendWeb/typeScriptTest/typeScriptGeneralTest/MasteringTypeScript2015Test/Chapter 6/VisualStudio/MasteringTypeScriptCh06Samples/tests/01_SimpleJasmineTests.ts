


describe("tests/01_SimpleJasmineTests.ts ", () => {
    it("value that has been assigned should be defined", () => {
        var undefinedValue = "test";
        expect(undefinedValue).toBeDefined();
        
    });
    it("shows some custom matchers", () => {
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

    describe("beforeEach and afterEach tests", () => {
        var myString;

        beforeEach(() => {
            myString = "this is a test string";
        });
        afterEach(() => {
            expect(myString).toBeUndefined();
        });

        it("should find then clear the myString variable", () => {
            expect(myString).toEqual("this is a test string");
            myString = undefined;
        });

    });

    describe("data driven tests", () => {
        using<string>("valid values", [
            "first string",
            "second string",
            "third string"
        ], (value) => {
            it("should contain string (" + value + ")", () => {
                expect(value).toContain("string");
            });
        });
    });

    describe("simple spy", () => {
        it("should register a function call", () => {
            var classInstance = new MySpiedClass();
            spyOn(classInstance, 'testFunction');

            classInstance.testFunction("test");
            
            expect(classInstance.testFunction).toHaveBeenCalled();
        });
    });

    describe("using callback spies", () => {
        it("should execute callback with the correct string value", () => {
            var doCallback = new DoCallBack();
            var classUnderTest = new CallbackClass();

            spyOn(doCallback, 'logValue');
            classUnderTest.doCallBack(1, doCallback.logValue);

            expect(doCallback.logValue).toHaveBeenCalled();
            expect(doCallback.logValue).toHaveBeenCalledWith("id:1");

        });
    });

    describe("using fakes", () => {
        it("calls fake instead of real function", () => {
            var classToFake = new ClassToFake();
            spyOn(classToFake, 'getValue').and.callFake(() => { return 5; });
            expect(classToFake.getValue()).toBe(5);
        });
    });


    xdescribe("asynchronous tests", () => {
        it("failing test", () => {
        
            var mockAsync = new MockAsyncClass();
            var returnedValue;
            mockAsync.executeSlowFunction((value: string) => {
                returnedValue = value;
            });
            expect(returnedValue).toEqual("success");
        });
        
    });

    describe("asynch tests with done", () => {
        var returnedValue;

        beforeEach((done) => {
            returnedValue = "no_return_value";
            var mockAsync = new MockAsyncClass();
            mockAsync.executeSlowFunction((value: string) => {
                returnedValue = value;
                done();
            });
        });

        it("should return success after 1 second", (done) => {
            expect(returnedValue).toEqual("success");
            done();
        });
    });

    describe("fixture tests", () => {
        it("modifies dom element", () => {
            setFixtures("<div id='my_div'></div>");
            var modifyDom = new ModifyDomElement();
            modifyDom.setHtml();
            var modifiedElement = $("#my_div");
            expect(modifiedElement.length).toBeGreaterThan(0);
            expect(modifiedElement.html()).toContain("Hello");
        });
    });

    describe("click event tests", () => {
        it("spies on click event element", () => {
            setFixtures("<div id='my_click_div' " +
                "onclick='handle_my_click_div_clicked'>Click Here</div>");

            var clickEventSpy = spyOnEvent("#my_click_div", "click");

            $('#my_click_div').click();

            expect(clickEventSpy).toHaveBeenTriggered();
        });
    });


});

function handle_my_click_div_clicked() {
    // do nothing at this time
}


class ModifyDomElement {
    setHtml() {
        var elem = $("#my_div");
        elem.html("<p>Hello world</p>");
    }
}

class ClassToFake {
    getValue(): number {
        return 2;
    }
}

class MySpiedClass {
    testFunction(arg1: string) {
        console.log(arg1);
    }
}


function testFunction(arg1: string) {
    console.log(arg1);
}

class CallbackClass {
    doCallBack(id: number, callback: (result: string) => void ) {
        var callbackValue = "id:" + id.toString();
        callback(callbackValue);
    }
}

class DoCallBack {
    logValue(value: string) {
        console.log(value);
    }
}

class MockAsyncClass {
    executeSlowFunction(success: (value: string) => void) {
        setTimeout(() => {
            success("success");
        }, 1000);
    }
}