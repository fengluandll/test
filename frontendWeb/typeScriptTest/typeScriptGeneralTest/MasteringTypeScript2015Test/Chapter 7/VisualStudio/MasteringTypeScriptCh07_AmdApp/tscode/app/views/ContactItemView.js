var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var ContactItemView = (function (_super) {
        __extends(ContactItemView, _super);
        function ContactItemView(options) {
            this.className = "contact-item-view";
            this.events = { 'click': this.onClicked };
            this.template = _.template(CONTACT_ITEM_SNIPPET);
            _super.call(this, options);
        }
        ContactItemView.prototype.render = function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        };
        ContactItemView.prototype.onClicked = function () {
            this.$el.flip({
                direction: 'tb',
                speed: 200
            });
        };
        return ContactItemView;
    })(Backbone.View);
    exports.ContactItemView = ContactItemView;
});
//# sourceMappingURL=ContactItemView.js.map