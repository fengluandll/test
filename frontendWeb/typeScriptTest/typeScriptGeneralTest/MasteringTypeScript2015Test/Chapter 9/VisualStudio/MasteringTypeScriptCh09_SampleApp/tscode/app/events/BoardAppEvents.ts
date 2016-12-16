import bm = require('../models/BoardModels');
import fm = require('../models/FilterModels');

export enum EventType {
	ManufacturerDataLoaded,
	BoardDetailBackClicked,
	ErrorEvent
}

export interface INotifyEvent {
	eventType: EventType;
}

export class IINotifyEvent implements IInterfaceChecker {
    propertyNames = ['eventType'];
    className = 'IINotifyEvent';
}

export class NotifyEvent implements INotifyEvent {
	eventType: EventType;
	constructor(_eventType: EventType) {
		this.eventType = _eventType;
	}
}

export interface INotifyEvent_Handler {
	handle_NotifyEvent(event: INotifyEvent): void;
}

export class IINotifyEvent_Handler implements IInterfaceChecker {
	methodNames = ['handle_NotifyEvent'];
	className = 'IINotifyEvent_Handler';
}

export interface IErrorEvent extends INotifyEvent {
	errorMessage: string;
}

export class IIErrorEvent implements IInterfaceChecker {
	propertyNames = ['eventType', 'errorMessage'];
    className = 'IIErrorEvent';
}

export class ErrorEvent extends NotifyEvent implements IErrorEvent {
	errorMessage: string;
	constructor(error: string) {
		super(EventType.ErrorEvent);
		this.errorMessage = error;
	}
}

export interface IErrorEvent_Handler {
	handle_ErrorEvent(event: IErrorEvent);
}

export class IIErrorEvent_Handler implements IInterfaceChecker {
	methodNames = ['handle_ErrorEvent'];
	className = 'IIErrorEvent_Handler';
}

//board selected events
 
export interface IBoardSelectEvent {
	selectedBoard: bm.BoardModel;
}

export class IIBoardSelectedEvent implements IInterfaceChecker {
	propertyNames = ['selectedBoard'];
    className = 'IIBoardSelectedEvent';
}

export class BoardSelectedEvent implements IBoardSelectEvent {
	selectedBoard: bm.BoardModel;
	constructor(board: bm.BoardModel) {
		this.selectedBoard = board;
	}
}

export interface IBoardSelectedEvent_Handler {
	handle_BoardSelectedEvent(event: IBoardSelectEvent);
}

export class IIBoardSelectedEvent_Handler implements IInterfaceChecker {
	methodNames = ['handle_BoardSelectedEvent'];
	className = 'IIBoardSelectedEvent_Handler';
}

// filter events

export interface IFilterEvent {
	filterType: fm.FilterType;
	filterName: string;
}

export class IIFilterEvent implements IInterfaceChecker {
	propertyNames = ['filterType', 'filterName'];
    className = 'IIFilterEvent';
}

export class FilterEvent implements IFilterEvent {
	filterType: fm.FilterType;
	filterName: string;
	constructor(_filterName: string, _filterType: fm.FilterType) {
		this.filterType = _filterType;
		this.filterName = _filterName;
	}
}

export interface IFilterEvent_Handler {
	handle_FilterEvent(event: IFilterEvent);
}

export class IIFilterEvent_Handler implements IInterfaceChecker {
	methodNames = ['handle_FilterEvent'];
	className = 'IIFilterEvent_Handler';
}