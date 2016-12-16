define(["require", "exports", "../app/events/ErrorEvent"], function (require, exports, iee) {
    var EventHandlerTests_ErrorHandler = (function () {
        function EventHandlerTests_ErrorHandler() {
        }
        EventHandlerTests_ErrorHandler.prototype.handle_ErrorEvent = function (event) {
            this.LastEventFired = event;
        };
        return EventHandlerTests_ErrorHandler;
    })();
    var No_ErrorHandler = (function () {
        function No_ErrorHandler() {
        }
        return No_ErrorHandler;
    })();
    describe("/tests//EventHandlerTests.ts", function () {
        var testHandler;
        beforeEach(function () {
            testHandler = new EventHandlerTests_ErrorHandler();
        });
        it("should register an event Handler", function () {
            var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
            eventHandlerList.registerHandler(testHandler, iee.IIErrorEvent_Handler);
            expect(eventHandlerList.eventHandlers.length).toBe(1);
        });
        it("should throw an error with the correct className", function () {
            var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
            expect(function () {
                eventHandlerList.registerHandler(new No_ErrorHandler(), iee.IIErrorEvent_Handler);
            }).toThrow(new Error("EventHandlerList cannot register handler of IIErrorEvent_Handler"));
        });
        it("should fire an event", function () {
            var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
            eventHandlerList.registerHandler(testHandler, iee.IIErrorEvent_Handler);
            eventHandlerList.raiseEvent(new iee.ErrorEvent("test", "test"));
            expect(testHandler.LastEventFired.Message).toBe("test");
        });
        it("should register an event handler with TypeScriptTinyIoC and fire an event", function () {
            TypeScriptTinyIoC.registerHandler(testHandler, iee.IIErrorEvent_Handler, iee.IIErrorEvent);
            TypeScriptTinyIoC.raiseEvent(new iee.ErrorEvent("test", "test"), iee.IIErrorEvent);
            expect(testHandler.LastEventFired.Message).toBe("test");
        });
    });
});
//# sourceMappingURL=EventHandlerTests.js.map