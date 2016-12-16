import ev = require('../events/BoardAppEvents');
import fm = require('../models/FilterModels');
import bm = require('../models/BoardModels');
import fv = require('./FilterView');
import mv = require('./ManufacturerViews');
import bdv = require('../views/BoardDetailViews');
import sm = require('../states/Mediator');
import ss = require('../states/State');

export class PageViewLayout extends Marionette.LayoutView<Backbone.Model>
	implements ev.INotifyEvent_Handler, ev.IBoardSelectedEvent_Handler,
	ev.IFilterEvent_Handler, sm.IMediatorFunctions
{

	private _filterCollectionView: fv.FilterCollectionView;
	private _manufacturerView: mv.ManufacturerCollectionView;
	private _mediator: sm.Mediator;

	constructor(options?: any) {
		if (!options)
			options = {};
		options.el = '#page_wrapper';

        var snippetService: ISnippetService = TypeScriptTinyIoC.resolve(IISnippetService);
        options.template = snippetService.retrieveSnippet(SnippetKey.PAGE_VIEW_LAYOUT_SNIPPET);

        options.events = {
			"click #show_filter_button": this.showHideFilterButtonClicked
        };

		super(options);

		var isMobile = $('html').hasClass('mobile');
		this._mediator = new sm.Mediator(this, isMobile);

		_.bindAll(this, 'handle_NotifyEvent');
		_.bindAll(this, 'handle_BoardSelectedEvent');
		_.bindAll(this, 'handle_FilterEvent');
		TypeScriptTinyIoC.registerHandler(this, ev.IINotifyEvent_Handler, 
            ev.IINotifyEvent);
		TypeScriptTinyIoC.registerHandler(this, ev.IIBoardSelectedEvent_Handler,
			ev.IIBoardSelectedEvent);
		TypeScriptTinyIoC.registerHandler(this, ev.IIFilterEvent_Handler, 
            ev.IIFilterEvent);

		$(window).resize(_.debounce(this.setDivHeights, 300));
	}
	onRender() {
		this.setDivHeights();
    }

	setDivHeights() {
		var panel_height = $('#main_panel_div').height();
		//$('#carousel_panel_1').height(panel_height - 100);
        $('#board_detail_inner_panel').height(panel_height - 150);
        $('#content_panel_left').height(panel_height - 100);
        $('#manufacturer_collection').height(panel_height - 100);
	}

	showLeftPanel() {
		$('#content_panel_left').removeClass('sidebar_panel_push_to_left');
        $('#content_panel_main').removeClass('main_panel_push_to_left');
	}
	hideLeftPanel() {
		$('#content_panel_left').addClass('sidebar_panel_push_to_left');
        $('#content_panel_main').addClass('main_panel_push_to_left');
	}
	cyclePanels(forwardOrNext: string) {
		$('#carousel-main-container').carousel(forwardOrNext);
	}
	showFilterButtonChangeClass(fromClass: string, toClass: string) {
		$('#show_filter_button').removeClass(fromClass).addClass(toClass);
	}

	showHideFilterButtonClicked() {
		this._mediator.showHideFilterButtonClicked();
	}

	handle_NotifyEvent(event: ev.INotifyEvent) {
		if (event.eventType == ev.EventType.ManufacturerDataLoaded) {
			var filterCollection = new fm.FilterCollection();
			filterCollection.buildFilterCollection();
			this._filterCollectionView = new fv.FilterCollectionView({ collection: filterCollection });
			this._filterCollectionView.render();

			this._manufacturerView = new mv.ManufacturerCollectionView();
			this._manufacturerView.render();

			this._mediator.moveToState(
                this._mediator.getCurrentMainPanelState().getStateType()
                );
		}
		if (event.eventType == ev.EventType.BoardDetailBackClicked) {
			this._mediator.moveToState(
                this._mediator.getCurrentMainPanelState().getStateType()
                );
		}
	}

	handle_BoardSelectedEvent(event: ev.IBoardSelectEvent) {
		//alert('selected board' + event.selectedBoard.get('name'));

		var boardDetailView = new bdv.BoardDetailView({ model: event.selectedBoard });
		boardDetailView.render();

		this._mediator.moveToState(ss.StateType.BoardDetail);
		this.setDivHeights();
	}

	handle_FilterEvent(event: ev.IFilterEvent) {
		
		var mainCollection: bm.ManufacturerCollection =
			TypeScriptTinyIoC.resolve(bm.IIManufacturerCollection);
		var filteredCollection;
		if (event.filterType == fm.FilterType.BoardType)
			filteredCollection = new bm.ManufacturerCollection(
				mainCollection.filterByBoardType(event.filterName));
		else if (event.filterType == fm.FilterType.Manufacturer)
			filteredCollection = new bm.ManufacturerCollection(
				mainCollection.filterByManufacturer(event.filterName));
		else if (event.filterType == fm.FilterType.None)
			filteredCollection = mainCollection;
		
		this._manufacturerView.collection = filteredCollection;
		this._manufacturerView.render();
	}

}