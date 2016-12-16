//import bm = require('../models/BoardModels');
//class BoardSizeMiniView extends Marionette.CompositeView<bm.BoardSize> {
//	 constructor(options?: any) {
//		 if (!options)
//			 options = {};
//		 options.template = "#boardSizeMiniView_Template";
//		 super(options);
//	 }
//}
// class BoardSizeMiniItemView extends Marionette.CompositeView<bm.BoardSize> {
//	 constructor(options?: any) {
//		 if (!options)
//			 options = {};
//		 options.template = "#boardSizeMiniView_ItemTemplate";
//		 super(options);
//	 }
// }
//class ManufacturerCollectionView extends Marionette.CollectionView<bm.ManufacturerModel> {
//	constructor(options?: any) {
//		if (!options)
//			options = {};
//		options.el = '#manufacturer_collecton';
//		options.className = "row board_row";
//		super(options);
//		this.childView = ManufacturerView;
//	}
//}
//class ManufacturerView extends Marionette.CompositeView<Backbone.Model> {
//	constructor(options?: any) {
//		if (!options)
//			options = {};
//        var snippetService: ISnippetService = TypeScriptTinyIoC.resolve(IISnippetService);
//        options.template = _.template(snippetService.retrieveSnippet(SnippetKey.MANUFACTURER_VIEW_SNIPPET));
//		//options.childViewContainer = 'ul';
//		//options.className = "panel panel-default";
//		super(options);
//		//this.collection = new Backbone.Collection(this.model.get('filterValues'));
//		//this.childView = FilterItemView;
//	}
//} 
//# sourceMappingURL=BoardViews.js.map