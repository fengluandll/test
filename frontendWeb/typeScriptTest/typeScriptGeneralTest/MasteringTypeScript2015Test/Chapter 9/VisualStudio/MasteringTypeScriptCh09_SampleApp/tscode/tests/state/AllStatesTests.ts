import ss = require('../../app/states/State');
import sm = require('../../app/states/Mediator');
import as = require('../../app/states/AllStates');

class PageViewMock implements sm.IMediatorFunctions {
	showLeftPanel() { }
	hideLeftPanel() { }
	cyclePanels(forwardOrNext: string) { }
	showFilterButtonChangeClass(fromClass: string, toClass: string) { }

}

describe('/tscode/tests/state/AllStatesTests',() => {

	var mainPanelState: as.BoardListOnlyState;
	var detailPanelState: as.DetailPanelState;
	var filterPanelState: as.BoardListWithFilterPanelState;
	var mockPageView: PageViewMock;
	var mediator: sm.Mediator;

	beforeAll(() => {
		mockPageView = new PageViewMock();
		mediator = new sm.Mediator(mockPageView, false);
		mainPanelState = new as.BoardListOnlyState(mediator);
		detailPanelState = new as.DetailPanelState(mediator);
		filterPanelState = new as.BoardListWithFilterPanelState(mediator);
	});

	it("main panel should have panel type set ",() => {
		expect(mainPanelState.getPanelType()).toBe(ss.PanelType.Initial);
	});

	it("filterPanel should have panel type set ",() => {
		expect(filterPanelState.getPanelType()).toBe(ss.PanelType.Initial);
	});

	it("detailPanel should have panel type set ",() => {
		expect(detailPanelState.getPanelType()).toBe(ss.PanelType.Secondary);
	});

	it(" move from initial to secondary panel should call cycle next",() => {
		spyOn(mockPageView, 'cyclePanels');

		mediator.moveToState(ss.StateType.BoardDetail);
		expect(mockPageView.cyclePanels).toHaveBeenCalled();
		expect(mockPageView.cyclePanels).toHaveBeenCalledWith('next');

	});

	it(" move from secondary panel back to initial should call cycle prev",() => {
		mediator.moveToState(ss.StateType.BoardDetail);
		spyOn(mockPageView, 'cyclePanels');

		mediator.moveToState(ss.StateType.BoardListWithFilter);
		expect(mockPageView.cyclePanels).toHaveBeenCalled();
		expect(mockPageView.cyclePanels).toHaveBeenCalledWith('prev');

	});

	it(" move from filter to board list should set prev state",() => {
		mediator.moveToState(ss.StateType.BoardListWithFilter);
		mediator.moveToState(ss.StateType.BoardListOnly);
		expect(mediator.getCurrentMainPanelState().getStateType()).toBe(ss.StateType.BoardListOnly);

	});

	it(" move from board list to detail and back should set prev state",() => {
		mediator.moveToState(ss.StateType.BoardListWithFilter);
		mediator.moveToState(ss.StateType.BoardListOnly);
		expect(mediator.getCurrentMainPanelState().getStateType()).toBe(ss.StateType.BoardListOnly);

	});

	it("move from filter to board list should set icon",() => {
		mediator.moveToState(ss.StateType.BoardListWithFilter);
		spyOn(mockPageView, 'showFilterButtonChangeClass');
		mediator.moveToState(ss.StateType.BoardListOnly);
		expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalled();
		expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalledWith('glyphicon-chevron-left', 'glyphicon-chevron-right');
	});

	it("move from board list to filter should set icon",() => {
		mediator.moveToState(ss.StateType.BoardListOnly);
		spyOn(mockPageView, 'showFilterButtonChangeClass');
		mediator.moveToState(ss.StateType.BoardListWithFilter);
		expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalled();
		expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalledWith('glyphicon-chevron-right', 'glyphicon-chevron-left');
	});

});