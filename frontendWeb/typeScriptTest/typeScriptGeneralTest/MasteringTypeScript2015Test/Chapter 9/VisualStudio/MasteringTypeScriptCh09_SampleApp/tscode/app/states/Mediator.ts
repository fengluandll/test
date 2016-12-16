import ss = require("./State");
import as = require("./AllStates");
import pvl = require("../views/PageViewLayout");

export interface IMediatorFunctions {
	showLeftPanel();
	hideLeftPanel();
	cyclePanels(forwardOrNext: string);
	showFilterButtonChangeClass(
        fromClass: string, toClass: string
    );
}

export class Mediator {
	private _currentState: ss.IState;
	private _currentMainPanelState: ss.IState;
	private _pageViewLayout: IMediatorFunctions;
	private _isMobile: boolean;

	private _mainPanelState: as.BoardListOnlyState;
	private _detailPanelState: as.DetailPanelState;
	private _filterPanelState: as.BoardListWithFilterPanelState;

	constructor(pageViewLayout: IMediatorFunctions, isMobile: boolean) {
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

	private getNextState(stateType: ss.StateType): ss.IState {
		var nextState: ss.IState;
		switch (stateType) {
			case ss.StateType.BoardDetail:
				nextState = this._detailPanelState;
				break;
			case ss.StateType.BoardListOnly:
				nextState = this._mainPanelState;
				break;
			case ss.StateType.BoardListWithFilter:
				nextState = this._filterPanelState;
		}
		return nextState;
	}

	public moveToState(stateType: ss.StateType) {
		var previousState = this._currentState;
		var nextState = this.getNextState(stateType);

		if (previousState.getPanelType() == ss.PanelType.Initial &&
			nextState.getPanelType() == ss.PanelType.Secondary) {
			this._pageViewLayout.hideLeftPanel();
			this._pageViewLayout.cyclePanels('next');
		}

		if (previousState.getPanelType() == ss.PanelType.Secondary &&
			nextState.getPanelType() == ss.PanelType.Initial) {
			this._pageViewLayout.cyclePanels('prev');
		}

		this._pageViewLayout.showFilterButtonChangeClass(
            previousState.getShowFilterClass(), nextState.getShowFilterClass()
        );

		if (nextState.isFilterPanelVisible())
			this._pageViewLayout.showLeftPanel();
		else
			this._pageViewLayout.hideLeftPanel();

		this._currentState = nextState;
		if (this._currentState.getStateType() == ss.StateType.BoardListOnly 
            || this._currentState.getStateType() == ss.StateType.BoardListWithFilter)
			this._currentMainPanelState = this._currentState;
	}

	public showHideFilterButtonClicked() {
		switch (this._currentState.getStateType()) {
			case ss.StateType.BoardListWithFilter:
				this.moveToState(ss.StateType.BoardListOnly);
				break;
			case ss.StateType.BoardListOnly:
				this.moveToState(ss.StateType.BoardListWithFilter);
				break;
		}
	}

	public getCurrentMainPanelState(): ss.IState {
		return this._currentMainPanelState;
	}
}