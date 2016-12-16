import cc = require("tscode/app/models/ContactCollection");
import cm = require("tscode/app/models/ContactModel");
import civ = require("tscode/app/views/ContactItemView");
import ccv = require("tscode/app/views/ContactCollectionView");

export class ContactViewApp {
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
}