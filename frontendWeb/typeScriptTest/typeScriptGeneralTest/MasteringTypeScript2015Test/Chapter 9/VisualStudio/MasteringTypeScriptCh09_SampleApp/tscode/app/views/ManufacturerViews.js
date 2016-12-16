var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../models/BoardModels', '../events/BoardAppEvents'], function (require, exports, bm, bae) {
    var ManufacturerCollectionView = (function (_super) {
        __extends(ManufacturerCollectionView, _super);
        function ManufacturerCollectionView(options) {
            if (!options)
                options = {};
            options.el = '#manufacturer_collection';
            options.className = "row board_row";
            _super.call(this, options);
            this.childView = ManufacturerView;
            var manufColl = TypeScriptTinyIoC.resolve(bm.IIManufacturerCollection);
            if (!options.collection) {
                this.collection = manufColl;
            }
            else {
                this.collection = options.collection;
            }
        }
        return ManufacturerCollectionView;
    })(Marionette.CollectionView);
    exports.ManufacturerCollectionView = ManufacturerCollectionView;
    var ManufacturerView = (function (_super) {
        __extends(ManufacturerView, _super);
        function ManufacturerView(options) {
            if (!options)
                options = {};
            options.template = _.template('<div></div>');
            _super.call(this, options);
            this.collection = new Backbone.Collection(this.model.get('boards'));
            this.childView = BoardView;
            this.childViewOptions = {
                parentIcon: this.model.get('manufacturer_logo')
            };
        }
        return ManufacturerView;
    })(Marionette.CompositeView);
    exports.ManufacturerView = ManufacturerView;
    var BoardView = (function (_super) {
        __extends(BoardView, _super);
        function BoardView(options) {
            if (!options)
                options = {};
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            options.template = _.template(snippetService.retrieveSnippet(2 /* BOARD_VIEW_SNIPPET */));
            options.events = {
                "click": this.onClicked,
            };
            _super.call(this, options);
            this.model.set('parentIcon', options.parentIcon);
            this.collection = (new Backbone.Collection(this.model.get('sizes')));
            this.childView = BoardSizeView;
            this.childViewContainer = 'tbody';
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            this.childViewOptions = {
                template: _.template(snippetService.retrieveSnippet(3 /* BOARD_SIZE_MINI_VIEW_SNIPPET */))
            };
            _.bindAll(this, 'onClicked');
        }
        BoardView.prototype.onClicked = function () {
            var _this = this;
            this.$el.find('.board_inner_panel').flip({
                direction: 'lr',
                speed: 100,
                onEnd: function () {
                    TypeScriptTinyIoC.raiseEvent(new bae.BoardSelectedEvent(_this.model), bae.IIBoardSelectedEvent);
                }
            });
        };
        return BoardView;
    })(Marionette.CompositeView);
    exports.BoardView = BoardView;
    var BoardSizeView = (function (_super) {
        __extends(BoardSizeView, _super);
        function BoardSizeView(options) {
            if (!options)
                options = {};
            _super.call(this, options);
        }
        return BoardSizeView;
    })(Marionette.ItemView);
    exports.BoardSizeView = BoardSizeView;
});
//# sourceMappingURL=ManufacturerViews.js.map