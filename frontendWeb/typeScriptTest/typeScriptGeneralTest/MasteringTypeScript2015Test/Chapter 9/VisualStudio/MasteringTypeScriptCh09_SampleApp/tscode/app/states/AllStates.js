var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./State"], function (require, exports, ss) {
    var BoardListOnlyState = (function (_super) {
        __extends(BoardListOnlyState, _super);
        function BoardListOnlyState(mediator) {
            _super.call(this, mediator);
        }
        BoardListOnlyState.prototype.getPanelType = function () {
            return 0 /* Initial */;
        };
        BoardListOnlyState.prototype.getShowFilterClass = function () {
            return "glyphicon-chevron-right";
        };
        BoardListOnlyState.prototype.isFilterPanelVisible = function () {
            return false;
        };
        BoardListOnlyState.prototype.getStateType = function () {
            return 0 /* BoardListOnly */;
        };
        return BoardListOnlyState;
    })(ss.State);
    exports.BoardListOnlyState = BoardListOnlyState;
    var DetailPanelState = (function (_super) {
        __extends(DetailPanelState, _super);
        function DetailPanelState(mediator) {
            _super.call(this, mediator);
        }
        DetailPanelState.prototype.getPanelType = function () {
            return 1 /* Secondary */;
        };
        DetailPanelState.prototype.getShowFilterClass = function () {
            return "";
        };
        DetailPanelState.prototype.isFilterPanelVisible = function () {
            return false;
        };
        DetailPanelState.prototype.getStateType = function () {
            return 2 /* BoardDetail */;
        };
        return DetailPanelState;
    })(ss.State);
    exports.DetailPanelState = DetailPanelState;
    var BoardListWithFilterPanelState = (function (_super) {
        __extends(BoardListWithFilterPanelState, _super);
        function BoardListWithFilterPanelState(mediator) {
            _super.call(this, mediator);
        }
        BoardListWithFilterPanelState.prototype.getPanelType = function () {
            return 0 /* Initial */;
        };
        BoardListWithFilterPanelState.prototype.getShowFilterClass = function () {
            return "glyphicon-chevron-left";
        };
        BoardListWithFilterPanelState.prototype.isFilterPanelVisible = function () {
            return true;
        };
        BoardListWithFilterPanelState.prototype.getStateType = function () {
            return 1 /* BoardListWithFilter */;
        };
        return BoardListWithFilterPanelState;
    })(ss.State);
    exports.BoardListWithFilterPanelState = BoardListWithFilterPanelState;
});
//# sourceMappingURL=AllStates.js.map