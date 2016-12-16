define(["require", "exports"], function (require, exports) {
    (function (StateType) {
        StateType[StateType["BoardListOnly"] = 0] = "BoardListOnly";
        StateType[StateType["BoardListWithFilter"] = 1] = "BoardListWithFilter";
        StateType[StateType["BoardDetail"] = 2] = "BoardDetail";
    })(exports.StateType || (exports.StateType = {}));
    var StateType = exports.StateType;
    (function (PanelType) {
        PanelType[PanelType["Initial"] = 0] = "Initial";
        PanelType[PanelType["Secondary"] = 1] = "Secondary";
    })(exports.PanelType || (exports.PanelType = {}));
    var PanelType = exports.PanelType;
    var State = (function () {
        function State(mediator) {
            this._mediator = mediator;
        }
        return State;
    })();
    exports.State = State;
});
//# sourceMappingURL=State.js.map