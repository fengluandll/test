import iee = require("../app/events/ErrorEvent");

class EventHandlerTests_ErrorHandler
    implements iee.IErrorEvent_Handler {
    LastEventFired: iee.IErrorEvent;
    handle_ErrorEvent(event: iee.IErrorEvent) {
        this.LastEventFired = event;
    }
}

class No_ErrorHandler {
}

describe("/tests//EventHandlerTests.ts", () => {

    var testHandler: EventHandlerTests_ErrorHandler;
    beforeEach(() => {
        testHandler = new EventHandlerTests_ErrorHandler();
    });

    it("should register an event Handler", () => {
        var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
        eventHandlerList.registerHandler(testHandler,
            iee.IIErrorEvent_Handler);

        expect(eventHandlerList.eventHandlers.length).toBe(1);
    });

    it("should throw an error with the correct className", () => {
        var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
        expect(() => {
            eventHandlerList.registerHandler(new No_ErrorHandler(),
                iee.IIErrorEvent_Handler);
        }).toThrow(new Error(
            "EventHandlerList cannot register handler of IIErrorEvent_Handler"
            ));
    });

    it("should fire an event", () => {
        var eventHandlerList = new EventHandlerList('handle_ErrorEvent');
        eventHandlerList.registerHandler(testHandler,
            iee.IIErrorEvent_Handler);
        eventHandlerList.raiseEvent(new iee.ErrorEvent("test", "test"));
        expect(testHandler.LastEventFired.Message).toBe("test");
    });

    it("should register an event handler with TypeScriptTinyIoC and fire an event", () => {
        TypeScriptTinyIoC.registerHandler(testHandler,
            iee.IIErrorEvent_Handler, iee.IIErrorEvent);
        TypeScriptTinyIoC.raiseEvent(new iee.ErrorEvent("test", "test"),
            iee.IIErrorEvent);
        expect(testHandler.LastEventFired.Message).toBe("test");
    });
});