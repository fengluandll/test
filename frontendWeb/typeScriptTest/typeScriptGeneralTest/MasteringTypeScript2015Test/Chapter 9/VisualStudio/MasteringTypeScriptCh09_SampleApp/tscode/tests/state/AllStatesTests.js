define(["require", "exports", '../../app/states/State', '../../app/states/Mediator', '../../app/states/AllStates'], function (require, exports, ss, sm, as) {
    var PageViewMock = (function () {
        function PageViewMock() {
        }
        PageViewMock.prototype.showLeftPanel = function () {
        };
        PageViewMock.prototype.hideLeftPanel = function () {
        };
        PageViewMock.prototype.cyclePanels = function (forwardOrNext) {
        };
        PageViewMock.prototype.showFilterButtonChangeClass = function (fromClass, toClass) {
        };
        return PageViewMock;
    })();
    describe('/tscode/tests/state/AllStatesTests', function () {
        var mainPanelState;
        var detailPanelState;
        var filterPanelState;
        var mockPageView;
        var mediator;
        beforeAll(function () {
            mockPageView = new PageViewMock();
            mediator = new sm.Mediator(mockPageView, false);
            mainPanelState = new as.BoardListOnlyState(mediator);
            detailPanelState = new as.DetailPanelState(mediator);
            filterPanelState = new as.BoardListWithFilterPanelState(mediator);
        });
        it("main panel should have panel type set ", function () {
            expect(mainPanelState.getPanelType()).toBe(0 /* Initial */);
        });
        it("filterPanel should have panel type set ", function () {
            expect(filterPanelState.getPanelType()).toBe(0 /* Initial */);
        });
        it("detailPanel should have panel type set ", function () {
            expect(detailPanelState.getPanelType()).toBe(1 /* Secondary */);
        });
        it(" move from initial to secondary panel should call cycle next", function () {
            spyOn(mockPageView, 'cyclePanels');
            mediator.moveToState(2 /* BoardDetail */);
            expect(mockPageView.cyclePanels).toHaveBeenCalled();
            expect(mockPageView.cyclePanels).toHaveBeenCalledWith('next');
        });
        it(" move from secondary panel back to initial should call cycle prev", function () {
            mediator.moveToState(2 /* BoardDetail */);
            spyOn(mockPageView, 'cyclePanels');
            mediator.moveToState(1 /* BoardListWithFilter */);
            expect(mockPageView.cyclePanels).toHaveBeenCalled();
            expect(mockPageView.cyclePanels).toHaveBeenCalledWith('prev');
        });
        it(" move from filter to board list should set prev state", function () {
            mediator.moveToState(1 /* BoardListWithFilter */);
            mediator.moveToState(0 /* BoardListOnly */);
            expect(mediator.getCurrentMainPanelState().getStateType()).toBe(0 /* BoardListOnly */);
        });
        it(" move from board list to detail and back should set prev state", function () {
            mediator.moveToState(1 /* BoardListWithFilter */);
            mediator.moveToState(0 /* BoardListOnly */);
            expect(mediator.getCurrentMainPanelState().getStateType()).toBe(0 /* BoardListOnly */);
        });
        it("move from filter to board list should set icon", function () {
            mediator.moveToState(1 /* BoardListWithFilter */);
            spyOn(mockPageView, 'showFilterButtonChangeClass');
            mediator.moveToState(0 /* BoardListOnly */);
            expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalled();
            expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalledWith('glyphicon-chevron-left', 'glyphicon-chevron-right');
        });
        it("move from board list to filter should set icon", function () {
            mediator.moveToState(0 /* BoardListOnly */);
            spyOn(mockPageView, 'showFilterButtonChangeClass');
            mediator.moveToState(1 /* BoardListWithFilter */);
            expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalled();
            expect(mockPageView.showFilterButtonChangeClass).toHaveBeenCalledWith('glyphicon-chevron-right', 'glyphicon-chevron-left');
        });
    });
});
//# sourceMappingURL=AllStatesTests.js.map