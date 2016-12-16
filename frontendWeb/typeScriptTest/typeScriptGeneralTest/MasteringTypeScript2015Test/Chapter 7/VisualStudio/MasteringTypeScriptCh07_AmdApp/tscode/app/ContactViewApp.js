define(["require", "exports", "tscode/app/models/ContactCollection", "tscode/app/views/ContactCollectionView"], function (require, exports, cc, ccv) {
    var ContactViewApp = (function () {
        function ContactViewApp() {
        }
        ContactViewApp.prototype.run = function () {
            var contactCollection = new cc.ContactCollection();
            contactCollection.fetch({
                success: this.contactCollectionLoaded,
                error: this.contactCollectionError
            });
        };
        ContactViewApp.prototype.contactCollectionLoaded = function (model, response, options) {
            var contactCollectionView = new ccv.ContactCollectionView({
                collection: model
            });
            $("#mainContent").append(contactCollectionView.render().el);
        };
        ContactViewApp.prototype.contactCollectionError = function (model, response, options) {
            alert(model);
        };
        return ContactViewApp;
    })();
    exports.ContactViewApp = ContactViewApp;
});
//# sourceMappingURL=ContactViewApp.js.map