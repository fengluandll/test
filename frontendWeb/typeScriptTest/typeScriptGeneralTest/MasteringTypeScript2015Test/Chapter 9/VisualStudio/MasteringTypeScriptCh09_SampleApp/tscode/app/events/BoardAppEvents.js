var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    (function (EventType) {
        EventType[EventType["ManufacturerDataLoaded"] = 0] = "ManufacturerDataLoaded";
        EventType[EventType["BoardDetailBackClicked"] = 1] = "BoardDetailBackClicked";
        EventType[EventType["ErrorEvent"] = 2] = "ErrorEvent";
    })(exports.EventType || (exports.EventType = {}));
    var EventType = exports.EventType;
    var IINotifyEvent = (function () {
        function IINotifyEvent() {
            this.propertyNames = ['eventType'];
            this.className = 'IINotifyEvent';
        }
        return IINotifyEvent;
    })();
    exports.IINotifyEvent = IINotifyEvent;
    var NotifyEvent = (function () {
        function NotifyEvent(_eventType) {
            this.eventType = _eventType;
        }
        return NotifyEvent;
    })();
    exports.NotifyEvent = NotifyEvent;
    var IINotifyEvent_Handler = (function () {
        function IINotifyEvent_Handler() {
            this.methodNames = ['handle_NotifyEvent'];
            this.className = 'IINotifyEvent_Handler';
        }
        return IINotifyEvent_Handler;
    })();
    exports.IINotifyEvent_Handler = IINotifyEvent_Handler;
    var IIErrorEvent = (function () {
        function IIErrorEvent() {
            this.propertyNames = ['eventType', 'errorMessage'];
            this.className = 'IIErrorEvent';
        }
        return IIErrorEvent;
    })();
    exports.IIErrorEvent = IIErrorEvent;
    var ErrorEvent = (function (_super) {
        __extends(ErrorEvent, _super);
        function ErrorEvent(error) {
            _super.call(this, 2 /* ErrorEvent */);
            this.errorMessage = error;
        }
        return ErrorEvent;
    })(NotifyEvent);
    exports.ErrorEvent = ErrorEvent;
    var IIErrorEvent_Handler = (function () {
        function IIErrorEvent_Handler() {
            this.methodNames = ['handle_ErrorEvent'];
            this.className = 'IIErrorEvent_Handler';
        }
        return IIErrorEvent_Handler;
    })();
    exports.IIErrorEvent_Handler = IIErrorEvent_Handler;
    var IIBoardSelectedEvent = (function () {
        function IIBoardSelectedEvent() {
            this.propertyNames = ['selectedBoard'];
            this.className = 'IIBoardSelectedEvent';
        }
        return IIBoardSelectedEvent;
    })();
    exports.IIBoardSelectedEvent = IIBoardSelectedEvent;
    var BoardSelectedEvent = (function () {
        function BoardSelectedEvent(board) {
            this.selectedBoard = board;
        }
        return BoardSelectedEvent;
    })();
    exports.BoardSelectedEvent = BoardSelectedEvent;
    var IIBoardSelectedEvent_Handler = (function () {
        function IIBoardSelectedEvent_Handler() {
            this.methodNames = ['handle_BoardSelectedEvent'];
            this.className = 'IIBoardSelectedEvent_Handler';
        }
        return IIBoardSelectedEvent_Handler;
    })();
    exports.IIBoardSelectedEvent_Handler = IIBoardSelectedEvent_Handler;
    var IIFilterEvent = (function () {
        function IIFilterEvent() {
            this.propertyNames = ['filterType', 'filterName'];
            this.className = 'IIFilterEvent';
        }
        return IIFilterEvent;
    })();
    exports.IIFilterEvent = IIFilterEvent;
    var FilterEvent = (function () {
        function FilterEvent(_filterName, _filterType) {
            this.filterType = _filterType;
            this.filterName = _filterName;
        }
        return FilterEvent;
    })();
    exports.FilterEvent = FilterEvent;
    var IIFilterEvent_Handler = (function () {
        function IIFilterEvent_Handler() {
            this.methodNames = ['handle_FilterEvent'];
            this.className = 'IIFilterEvent_Handler';
        }
        return IIFilterEvent_Handler;
    })();
    exports.IIFilterEvent_Handler = IIFilterEvent_Handler;
});
//# sourceMappingURL=BoardAppEvents.js.map