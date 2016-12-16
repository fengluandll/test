var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../views/ManufacturerViews', '../events/BoardAppEvents'], function (require, exports, mv, bae) {
    var BoardDetailView = (function (_super) {
        __extends(BoardDetailView, _super);
        function BoardDetailView(options) {
            if (!options)
                options = {};
            options.el = "#board_detail_view";
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            options.template = _.template(snippetService.retrieveSnippet(4 /* BOARD_DETAIL_VIEW_SNIPPET */));
            options.events = {
                "click #prev_button": this.onPrev
            };
            _super.call(this, options);
            this.collection = (new Backbone.Collection(this.model.get('sizes')));
            this.childView = mv.BoardSizeView;
            this.childViewContainer = 'tbody';
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            this.childViewOptions = {
                template: _.template(snippetService.retrieveSnippet(5 /* BOARD_SIZE_VIEW_SNIPPET */)),
                tagName: 'tr'
            };
        }
        BoardDetailView.prototype.onPrev = function () {
            TypeScriptTinyIoC.raiseEvent(new bae.NotifyEvent(1 /* BoardDetailBackClicked */), bae.IINotifyEvent);
        };
        return BoardDetailView;
    })(Marionette.CompositeView);
    exports.BoardDetailView = BoardDetailView;
});
//# sourceMappingURL=BoardDetailViews.js.map