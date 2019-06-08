"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_component_1 = require("./contacts.component");
describe('ContactsComponent Tests', function () {
    var contactsComponent = null;
    beforeEach(function () {
        contactsComponent = new contacts_component_1.ContactsComponent();
    });
    it('should set instance correctly', function () {
        expect(contactsComponent).not.toBeNull();
    });
});
