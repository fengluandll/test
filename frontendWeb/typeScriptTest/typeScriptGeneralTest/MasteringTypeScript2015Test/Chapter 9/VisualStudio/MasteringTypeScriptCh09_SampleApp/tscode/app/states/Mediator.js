define(["require", "exports", "./State", "./AllStates"], function (require, exports, ss, as) {
    var Mediator = (function () {
        function Mediator(pageViewLayout, isMobile) {
            this._pageViewLayout = pageViewLayout;
            this._isMobile = isMobile;
            this._mainPanelState = new as.BoardListOnlyState(this);
            this._detailPanelState = new as.DetailPanelState(this);
            this._filterPanelState = new as.BoardListWithFilterPanelState(this);
            if (this._isMobile)
                this._currentState = this._mainPanelState;
            else
                this._currentState = this._filterPanelState;
            this._currentMainPanelState = this._currentState;
        }
        Mediator.prototype.getNextState = function (stateType) {
            var nextState;
            switch (stateType) {
                case 2 /* BoardDetail */:
                    nextState = this._detailPanelState;
                    break;
                case 0 /* BoardListOnly */:
                    nextState = this._mainPanelState;
                    break;
                case 1 /* BoardListWithFilter */:
                    nextState = this._filterPanelState;
            }
            return nextState;
        };
        Mediator.prototype.moveToState = function (stateType) {
            var previousState = this._currentState;
            var nextState = this.getNextState(stateType);
            if (previousState.getPanelType() == 0 /* Initial */ && nextState.getPanelType() == 1 /* Secondary */) {
                this._pageViewLayout.hideLeftPanel();
                this._pageViewLayout.cyclePanels('next');
            }
            if (previousState.getPanelType() == 1 /* Secondary */ && nextState.getPanelType() == 0 /* Initial */) {
                this._pageViewLayout.cyclePanels('prev');
            }
            this._pageViewLayout.showFilterButtonChangeClass(previousState.getShowFilterClass(), nextState.getShowFilterClass());
            if (nextState.isFilterPanelVisible())
                this._pageViewLayout.showLeftPanel();
            else
                this._pageViewLayout.hideLeftPanel();
            this._currentState = nextState;
            if (this._currentState.getStateType() == 0 /* BoardListOnly */ || this._currentState.getStateType() == 1 /* BoardListWithFilter */)
                this._currentMainPanelState = this._currentState;
        };
        Mediator.prototype.showHideFilterButtonClicked = function () {
            switch (this._currentState.getStateType()) {
                case 1 /* BoardListWithFilter */:
                    this.moveToState(0 /* BoardListOnly */);
                    break;
                case 0 /* BoardListOnly */:
                    this.moveToState(1 /* BoardListWithFilter */);
                    break;
            }
        };
        Mediator.prototype.getCurrentMainPanelState = function () {
            return this._currentMainPanelState;
        };
        return Mediator;
    })();
    exports.Mediator = Mediator;
});
//# sourceMappingURL=Mediator.js.map