var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./ContactModel"], function (require, exports, cm) {
    var ContactCollection = (function (_super) {
        __extends(ContactCollection, _super);
        function ContactCollection() {
            _super.apply(this, arguments);
            this.model = cm.ContactModel;
            this.url = "/tscode/tests/contacts.json";
        }
        return ContactCollection;
    })(Backbone.Collection);
    exports.ContactCollection = ContactCollection;
});
//# sourceMappingURL=ContactCollection.js.map