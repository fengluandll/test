import cm = require("./ContactModel")

export class ContactCollection
    extends Backbone.Collection<cm.ContactModel> {
    model = cm.ContactModel;
    url = "/tscode/tests/contacts.json";
}