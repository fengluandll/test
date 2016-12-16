define(["require", "exports", "../../app/models/ContactModel", "../../app/views/ContactItemView"], function (require, exports, cm, ccv) {
    var SnippetServiceRetrieveThrows = (function () {
        function SnippetServiceRetrieveThrows() {
        }
        SnippetServiceRetrieveThrows.prototype.storeSnippet = function (key, value) {
        };
        SnippetServiceRetrieveThrows.prototype.retrieveSnippet = function (key) {
            throw new Error("Error in retrieveSnippet");
        };
        return SnippetServiceRetrieveThrows;
    })();
    describe("/tscode/tests/views/ContactItemViewTests", function () {
        it("should generate html from template and model", function () {
            var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });
            var contactItemView = new ccv.ContactItemView({ model: contactModel });
            var html = contactItemView.render().$el.html();
            //expect(html).toBe('<p>testName (testEmailAddress)</p>');
            expect(html).toContain('testName');
            expect(html).toContain('testEmailAddress');
        });
        describe("should handle errors with SnippetService ", function () {
            var currentSnippetService;
            beforeAll(function () {
                currentSnippetService = TypeScriptTinyIoC.resolve(IISnippetService);
                var errorService = new SnippetServiceRetrieveThrows();
                TypeScriptTinyIoC.register(errorService, IISnippetService);
            });
            it("should handle an error on constructor", function () {
                var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });
                var contactItemView = new ccv.ContactItemView({ model: contactModel });
                var html = contactItemView.render().$el.html();
                expect(html).toContain('error');
            });
            afterAll(function () {
                TypeScriptTinyIoC.register(currentSnippetService, IISnippetService);
            });
        });
    });
});
//# sourceMappingURL=ContactItemViewTests.js.map