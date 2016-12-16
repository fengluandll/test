import bm = require('../models/BoardModels');
import bae = require('../events/BoardAppEvents');

export class ManufacturerCollectionView 
    extends Marionette.CollectionView<bm.ManufacturerModel> {
	constructor(options?: any) {
		if (!options)
			options = {};
		options.el = '#manufacturer_collection';
		options.className = "row board_row";

		super(options);
		this.childView = ManufacturerView;

		var manufColl: bm.IManufacturerCollection = 
            TypeScriptTinyIoC.resolve(bm.IIManufacturerCollection);
		if (!options.collection) {
			this.collection = 
                <Backbone.Collection<bm.ManufacturerModel>> manufColl;
		} else {
			this.collection = options.collection;
		}
	}
}

export class ManufacturerView 
    extends Marionette.CompositeView<Backbone.Model> {
	constructor(options?: any) {
		if (!options)
			options = {};
        options.template = _.template('<div></div>');
		super(options);
		this.collection = new Backbone.Collection(
            this.model.get('boards')
        );
		this.childView = BoardView;
		this.childViewOptions = { 
            parentIcon: this.model.get('manufacturer_logo') 
        };
	}
}

export class BoardView 
    extends Marionette.CompositeView<bm.BoardModel> {
	constructor(options?: any) {
		if (!options)
			options = {};
        var snippetService: ISnippetService =
             TypeScriptTinyIoC.resolve(IISnippetService);
        options.template = _.template(
            snippetService.retrieveSnippet(SnippetKey.BOARD_VIEW_SNIPPET)
        );

		options.events = {
            "click": this.onClicked,
        };

		super(options);

		this.model.set('parentIcon', options.parentIcon);

		this.collection = <any>(new Backbone.Collection(this.model.get('sizes')));
		this.childView = BoardSizeView;
		this.childViewContainer = 'tbody';

		var snippetService: ISnippetService = TypeScriptTinyIoC.resolve(IISnippetService);
		this.childViewOptions = { 
            template: _.template(
                snippetService.retrieveSnippet(SnippetKey.BOARD_SIZE_MINI_VIEW_SNIPPET)
                ) 
        };
		_.bindAll(this, 'onClicked');
	}

	onClicked() {
		this.$el.find('.board_inner_panel').flip({
            direction: 'lr',
            speed: 100,
			onEnd: () => {
				TypeScriptTinyIoC.raiseEvent(
					new bae.BoardSelectedEvent(this.model),
					bae.IIBoardSelectedEvent);
			}
        });
	}
}

export class BoardSizeView 
    extends Marionette.ItemView<bm.BoardSize> {
	constructor(options?: any) {
		if (!options)
			options = {};
		super(options);
	}
}