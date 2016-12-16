import bm = require('../models/BoardModels');
import mv = require('../views/ManufacturerViews');
import bae = require('../events/BoardAppEvents');

export class BoardDetailView 
    extends Marionette.CompositeView<bm.BoardSize> {
	constructor(options?: any) {
		if (!options)
			options = {};

		options.el = "#board_detail_view";
		var snippetService: ISnippetService = 
            TypeScriptTinyIoC.resolve(IISnippetService);
        options.template = _.template(
            snippetService.retrieveSnippet(
                SnippetKey.BOARD_DETAIL_VIEW_SNIPPET));

		options.events = {
            "click #prev_button": this.onPrev
        };
		super(options);

		this.collection = <any>(
            new Backbone.Collection(this.model.get('sizes')));
		this.childView = mv.BoardSizeView;
		this.childViewContainer = 'tbody';

		var snippetService: ISnippetService = 
            TypeScriptTinyIoC.resolve(IISnippetService);
		this.childViewOptions = { 
            template: _.template(
                snippetService.retrieveSnippet(
                    SnippetKey.BOARD_SIZE_VIEW_SNIPPET)), 
            tagName: 'tr' };
	}

	onPrev() {
		TypeScriptTinyIoC.raiseEvent(
            new bae.NotifyEvent(bae.EventType.BoardDetailBackClicked), 
            bae.IINotifyEvent);
	}
}

