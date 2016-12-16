import sm = require('./Mediator');
import ss = require("./State");

export class BoardListOnlyState 
    extends ss.State 
    implements ss.IState {
	constructor(mediator: sm.Mediator) {
		super(mediator);
	}
	getPanelType(): ss.PanelType {
		return ss.PanelType.Initial;
	}
	getShowFilterClass() {
		return "glyphicon-chevron-right";
	}
	isFilterPanelVisible(): boolean {
		return false;
	}
	getStateType(): ss.StateType {
		return ss.StateType.BoardListOnly;
	}
}

export class DetailPanelState 
    extends ss.State 
    implements ss.IState {
	constructor(mediator: sm.Mediator) {
		super(mediator);
	}
	getPanelType(): ss.PanelType {
		return ss.PanelType.Secondary;
	}
	getShowFilterClass() {
		return "";
	}
	isFilterPanelVisible(): boolean {
		return false;
	}
	getStateType(): ss.StateType {
		return ss.StateType.BoardDetail;
	}
}

export class BoardListWithFilterPanelState 
    extends ss.State 
    implements ss.IState {
	constructor(mediator: sm.Mediator) {
		super(mediator);
	}
	getPanelType(): ss.PanelType {
		return ss.PanelType.Initial;
	}
	getShowFilterClass() {
		return "glyphicon-chevron-left";
	}
	isFilterPanelVisible(): boolean {
		return true;
	}
	getStateType(): ss.StateType {
		return ss.StateType.BoardListWithFilter;
	}
}