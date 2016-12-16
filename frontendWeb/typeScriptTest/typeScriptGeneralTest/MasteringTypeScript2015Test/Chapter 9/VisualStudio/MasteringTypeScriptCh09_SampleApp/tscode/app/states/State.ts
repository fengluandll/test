import sm = require('./Mediator');

export enum StateType {
	BoardListOnly,
	BoardListWithFilter,
	BoardDetail,
}

export enum PanelType { Initial, Secondary }

export interface IState {
	getPanelType(): PanelType;
	getShowFilterClass(): string;
	isFilterPanelVisible(): boolean;
	getStateType(): StateType;
}

export class State {
	private _mediator: sm.Mediator;
	constructor(mediator: sm.Mediator) {
		this._mediator = mediator;
	}
}

