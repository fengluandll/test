import cm = require("../../app/models/ContactModel");
import ccv = require("../../app/views/ContactItemView");

describe("/tscode/tests/views/ContactItemViewTests", () => {
    it("should generate html from template and model", () => {
        var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });

        var contactItemView = new ccv.ContactItemView({ model: contactModel });
        var html = contactItemView.render().$el.html();

        //expect(html).toBe('<p>testName (testEmailAddress)</p>');
        expect(html).toContain('testName');
        expect(html).toContain('testEmailAddress');
    });
});