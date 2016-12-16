define(["require", "exports", "../../app/models/ContactModel", "../../app/views/ContactItemView"], function (require, exports, cm, ccv) {
    describe("/tscode/tests/views/ContactItemViewTests", function () {
        it("should generate html from template and model", function () {
            var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });
            var contactItemView = new ccv.ContactItemView({ model: contactModel });
            var html = contactItemView.render().$el.html();
            //expect(html).toBe('<p>testName (testEmailAddress)</p>');
            expect(html).toContain('testName');
            expect(html).toContain('testEmailAddress');
        });
    });
});
//# sourceMappingURL=ContactItemViewTests.js.map