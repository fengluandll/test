define(["require", "exports"], function (require, exports) {
    var IIErrorEvent = (function () {
        function IIErrorEvent() {
            this.propertyNames = ["Message", "Description"];
            this.className = "IIErrorEvent";
        }
        return IIErrorEvent;
    })();
    exports.IIErrorEvent = IIErrorEvent;
    var ErrorEvent = (function () {
        function ErrorEvent(message, description) {
            this.Message = message;
            this.Description = description;
        }
        return ErrorEvent;
    })();
    exports.ErrorEvent = ErrorEvent;
    var IIErrorEvent_Handler = (function () {
        function IIErrorEvent_Handler() {
            this.methodNames = ["handle_ErrorEvent"];
            this.className = "IIErrorEvent_Handler";
        }
        return IIErrorEvent_Handler;
    })();
    exports.IIErrorEvent_Handler = IIErrorEvent_Handler;
});
//# sourceMappingURL=ErrorEvent.js.map