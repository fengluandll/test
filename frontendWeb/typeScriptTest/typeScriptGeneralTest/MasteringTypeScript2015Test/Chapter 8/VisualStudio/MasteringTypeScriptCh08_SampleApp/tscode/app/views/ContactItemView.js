var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../events/ErrorEvent"], function (require, exports, iee) {
    var ContactItemView = (function (_super) {
        __extends(ContactItemView, _super);
        function ContactItemView(options) {
            var contactItemSnippet = "";
            var snippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            try {
                contactItemSnippet = snippetService.retrieveSnippet(0 /* CONTACT_ITEM_SNIPPET */);
            }
            catch (err) {
                contactItemSnippet = "There was an error loading CONTACT_ITEM_SNIPPET";
            }
            this.className = "contact-item-view";
            this.events = { 'click': this.onClicked };
            this.template = _.template(contactItemSnippet);
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
            var errorEvent = new iee.ErrorEvent("Dummy error message", this.model.Name);
            TypeScriptTinyIoC.raiseEvent(errorEvent, iee.IIErrorEvent);
        };
        return ContactItemView;
    })(Backbone.View);
    exports.ContactItemView = ContactItemView;
});
//# sourceMappingURL=ContactItemView.js.map