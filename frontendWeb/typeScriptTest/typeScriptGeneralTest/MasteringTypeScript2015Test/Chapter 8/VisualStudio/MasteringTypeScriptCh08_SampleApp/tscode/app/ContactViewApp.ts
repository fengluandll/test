import cc = require("tscode/app/models/ContactCollection");
//import cm = require("tscode/app/models/ContactModel");
//import civ = require("tscode/app/views/ContactItemView");
import ccv = require("tscode/app/views/ContactCollectionView");
import iee = require("tscode/app/events/ErrorEvent");

export class ContactViewApp implements iee.IErrorEvent_Handler {
    constructor() {
        TypeScriptTinyIoC.registerHandler(this,
            iee.IIErrorEvent_Handler, iee.IIErrorEvent);
    }
    run() {
        var contactCollection = new cc.ContactCollection();
        contactCollection.fetch(
            {
                success: this.contactCollectionLoaded,
                error: this.contactCollectionError
            });
    }

    contactCollectionLoaded(model, response, options) {
        var contactCollectionView = new ccv.ContactCollectionView(
            {
                collection: model
            });
        $("#mainContent").append(contactCollectionView.render().el);
    }
    contactCollectionError(model, response, options) {
        alert(model);
    }
    handle_ErrorEvent(event: iee.IErrorEvent) {
        $.notify("Error : " + event.Message + "\n" + event.Description);
    }
}