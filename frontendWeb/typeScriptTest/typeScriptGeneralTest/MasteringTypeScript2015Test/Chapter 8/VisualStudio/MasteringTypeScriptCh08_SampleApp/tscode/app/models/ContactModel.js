var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var ContactModel = (function (_super) {
        __extends(ContactModel, _super);
        function ContactModel() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ContactModel.prototype, "Name", {
            get: function () {
                return this.get('Name');
            },
            set: function (val) {
                this.set('Name', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactModel.prototype, "EmailAddress", {
            get: function () {
                return this.get('EmailAddress');
            },
            set: function (val) {
                this.set('EmailAddress', val);
            },
            enumerable: true,
            configurable: true
        });
        return ContactModel;
    })(Backbone.Model);
    exports.ContactModel = ContactModel;
});
//# sourceMappingURL=ContactModel.js.map