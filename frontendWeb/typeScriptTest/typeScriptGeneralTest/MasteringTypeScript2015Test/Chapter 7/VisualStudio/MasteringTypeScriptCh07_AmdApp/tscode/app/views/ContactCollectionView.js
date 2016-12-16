var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./ContactItemView"], function (require, exports, civ) {
    var ContactCollectionView = (function (_super) {
        __extends(ContactCollectionView, _super);
        function ContactCollectionView(options) {
            _super.call(this, options);
            _.bindAll(this, 'renderChildItem');
        }
        ContactCollectionView.prototype.render = function () {
            this.collection.each(this.renderChildItem);
            return this;
        };
        ContactCollectionView.prototype.renderChildItem = function (element, index) {
            var itemView = new civ.ContactItemView({ model: element });
            this.$el.append(itemView.render().$el);
        };
        return ContactCollectionView;
    })(Backbone.View);
    exports.ContactCollectionView = ContactCollectionView;
});
//# sourceMappingURL=ContactCollectionView.js.map