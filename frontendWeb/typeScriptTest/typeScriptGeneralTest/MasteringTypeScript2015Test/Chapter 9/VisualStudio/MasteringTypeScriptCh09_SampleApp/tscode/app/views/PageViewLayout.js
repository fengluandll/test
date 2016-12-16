var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../events/BoardAppEvents', '../models/FilterModels', '../models/BoardModels', './FilterView', './ManufacturerViews', '../views/BoardDetailViews', '../states/Mediator', '../states/State'], function (require, exports, ev, fm, bm, fv, mv, bdv, sm, ss) {
    var PageViewLayout = (function (_super) {
        __extends(PageViewLayout, _super);
        function PageViewLayout(options) {
            if (!options)
                options = {};
            options.el = '#page_wrapper';
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            options.template = snippetService.retrieveSnippet(0 /* PAGE_VIEW_LAYOUT_SNIPPET */);
            options.events = {
                "click #show_filter_button": this.showHideFilterButtonClicked
            };
            _super.call(this, options);
            var isMobile = $('html').hasClass('mobile');
            this._mediator = new sm.Mediator(this, isMobile);
            _.bindAll(this, 'handle_NotifyEvent');
            _.bindAll(this, 'handle_BoardSelectedEvent');
            _.bindAll(this, 'handle_FilterEvent');
            TypeScriptTinyIoC.registerHandler(this, ev.IINotifyEvent_Handler, ev.IINotifyEvent);
            TypeScriptTinyIoC.registerHandler(this, ev.IIBoardSelectedEvent_Handler, ev.IIBoardSelectedEvent);
            TypeScriptTinyIoC.registerHandler(this, ev.IIFilterEvent_Handler, ev.IIFilterEvent);
            $(window).resize(_.debounce(this.setDivHeights, 300));
        }
        PageViewLayout.prototype.onRender = function () {
            this.setDivHeights();
        };
        PageViewLayout.prototype.setDivHeights = function () {
            var panel_height = $('#main_panel_div').height();
            //$('#carousel_panel_1').height(panel_height - 100);
            $('#board_detail_inner_panel').height(panel_height - 150);
            $('#content_panel_left').height(panel_height - 100);
            $('#manufacturer_collection').height(panel_height - 100);
        };
        PageViewLayout.prototype.showLeftPanel = function () {
            $('#content_panel_left').removeClass('sidebar_panel_push_to_left');
            $('#content_panel_main').removeClass('main_panel_push_to_left');
        };
        PageViewLayout.prototype.hideLeftPanel = function () {
            $('#content_panel_left').addClass('sidebar_panel_push_to_left');
            $('#content_panel_main').addClass('main_panel_push_to_left');
        };
        PageViewLayout.prototype.cyclePanels = function (forwardOrNext) {
            $('#carousel-main-container').carousel(forwardOrNext);
        };
        PageViewLayout.prototype.showFilterButtonChangeClass = function (fromClass, toClass) {
            $('#show_filter_button').removeClass(fromClass).addClass(toClass);
        };
        PageViewLayout.prototype.showHideFilterButtonClicked = function () {
            this._mediator.showHideFilterButtonClicked();
        };
        PageViewLayout.prototype.handle_NotifyEvent = function (event) {
            if (event.eventType == 0 /* ManufacturerDataLoaded */) {
                var filterCollection = new fm.FilterCollection();
                filterCollection.buildFilterCollection();
                this._filterCollectionView = new fv.FilterCollectionView({ collection: filterCollection });
                this._filterCollectionView.render();
                this._manufacturerView = new mv.ManufacturerCollectionView();
                this._manufacturerView.render();
                this._mediator.moveToState(this._mediator.getCurrentMainPanelState().getStateType());
            }
            if (event.eventType == 1 /* BoardDetailBackClicked */) {
                this._mediator.moveToState(this._mediator.getCurrentMainPanelState().getStateType());
            }
        };
        PageViewLayout.prototype.handle_BoardSelectedEvent = function (event) {
            //alert('selected board' + event.selectedBoard.get('name'));
            var boardDetailView = new bdv.BoardDetailView({ model: event.selectedBoard });
            boardDetailView.render();
            this._mediator.moveToState(2 /* BoardDetail */);
            this.setDivHeights();
        };
        PageViewLayout.prototype.handle_FilterEvent = function (event) {
            var mainCollection = TypeScriptTinyIoC.resolve(bm.IIManufacturerCollection);
            var filteredCollection;
            if (event.filterType == 1 /* BoardType */)
                filteredCollection = new bm.ManufacturerCollection(mainCollection.filterByBoardType(event.filterName));
            else if (event.filterType == 0 /* Manufacturer */)
                filteredCollection = new bm.ManufacturerCollection(mainCollection.filterByManufacturer(event.filterName));
            else if (event.filterType == 2 /* None */)
                filteredCollection = mainCollection;
            this._manufacturerView.collection = filteredCollection;
            this._manufacturerView.render();
        };
        return PageViewLayout;
    })(Marionette.LayoutView);
    exports.PageViewLayout = PageViewLayout;
});
//# sourceMappingURL=PageViewLayout.js.map