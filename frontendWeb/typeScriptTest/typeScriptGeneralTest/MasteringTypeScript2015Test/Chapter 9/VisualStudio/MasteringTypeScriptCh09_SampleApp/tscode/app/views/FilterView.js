var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../events/BoardAppEvents'], function (require, exports, bae) {
    var FilterCollectionView = (function (_super) {
        __extends(FilterCollectionView, _super);
        function FilterCollectionView(options) {
            if (!options)
                options = {};
            options.el = '#accordion';
            _super.call(this, options);
            this.childView = FilterModelView;
        }
        return FilterCollectionView;
    })(Marionette.CollectionView);
    exports.FilterCollectionView = FilterCollectionView;
    var FilterModelView = (function (_super) {
        __extends(FilterModelView, _super);
        function FilterModelView(options) {
            if (!options)
                options = {};
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            options.template = _.template(snippetService.retrieveSnippet(1 /* FILTER_MODEL_VIEW_SNIPPET */));
            options.childViewContainer = 'ul';
            options.className = "panel panel-default filter_panel";
            _super.call(this, options);
            this.collection = new Backbone.Collection(this.model.get('filterValues'));
            this.childView = FilterItemView;
            this.childViewOptions = {
                filterType: this.model.get('filterType')
            };
        }
        return FilterModelView;
    })(Marionette.CompositeView);
    exports.FilterModelView = FilterModelView;
    var FilterItemView = (function (_super) {
        __extends(FilterItemView, _super);
        function FilterItemView(options) {
            if (!options)
                options = {};
            options.tagName = "li";
            options.template = _.template('<a><%= filterValue %></a>');
            options.events = { click: 'filterClicked' };
            this._filterType = options.filterType;
            _super.call(this, options);
            _.bindAll(this, 'filterClicked');
        }
        FilterItemView.prototype.filterClicked = function () {
            TypeScriptTinyIoC.raiseEvent(new bae.FilterEvent(this.model.get('filterValue'), this._filterType), bae.IIFilterEvent);
        };
        return FilterItemView;
    })(Marionette.ItemView);
    exports.FilterItemView = FilterItemView;
});
//# sourceMappingURL=FilterView.js.map