import fm = require('../models/FilterModels');
import bae = require('../events/BoardAppEvents');

export class FilterCollectionView
	extends Marionette.CollectionView<fm.FilterModel> {
	constructor(options?: any) {
		if (!options)
			options = {};
		options.el = '#accordion';
		super(options);
		this.childView = FilterModelView;
	}
}

export class FilterModelView
	extends Marionette.CompositeView<Backbone.Model> {
	constructor(options?: any) {
		if (!options)
			options = {};

        var snippetService: ISnippetService =
			TypeScriptTinyIoC.resolve(IISnippetService);
        options.template = _.template(
			snippetService.retrieveSnippet(
				SnippetKey.FILTER_MODEL_VIEW_SNIPPET));

		options.childViewContainer = 'ul';
		options.className = "panel panel-default filter_panel";
		super(options);

		this.collection = new Backbone.Collection(
			this.model.get('filterValues'));
		this.childView = FilterItemView;
		this.childViewOptions = {
			filterType: this.model.get('filterType')
		};
	}
}

export class FilterItemView
	extends Marionette.ItemView<fm.FilterValue> {
	private _filterType: number;
	constructor(options?: any) {
		if (!options)
			options = {};
		options.tagName = "li";
		options.template = _.template('<a><%= filterValue %></a>');

		options.events = { click: 'filterClicked' };
		this._filterType = options.filterType;
		super(options);
		_.bindAll(this, 'filterClicked');
		
	}
	filterClicked() {
		TypeScriptTinyIoC.raiseEvent(
			new bae.FilterEvent(
				this.model.get('filterValue'),
				this._filterType),
			bae.IIFilterEvent);
	}
}