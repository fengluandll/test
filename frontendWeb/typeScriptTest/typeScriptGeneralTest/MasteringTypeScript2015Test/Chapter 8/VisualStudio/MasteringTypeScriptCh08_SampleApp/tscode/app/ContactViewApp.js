define(["require", "exports", "tscode/app/models/ContactCollection", "tscode/app/views/ContactCollectionView", "tscode/app/events/ErrorEvent"], function (require, exports, cc, ccv, iee) {
    var ContactViewApp = (function () {
        function ContactViewApp() {
            TypeScriptTinyIoC.registerHandler(this, iee.IIErrorEvent_Handler, iee.IIErrorEvent);
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
        ContactViewApp.prototype.handle_ErrorEvent = function (event) {
            $.notify("Error : " + event.Message + "\n" + event.Description);
        };
        return ContactViewApp;
    })();
    exports.ContactViewApp = ContactViewApp;
});
//# sourceMappingURL=ContactViewApp.js.map