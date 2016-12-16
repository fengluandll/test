import cm = require("../../app/models/ContactModel");
import ccv = require("../../app/views/ContactItemView");

class SnippetServiceRetrieveThrows implements ISnippetService {
    storeSnippet(key: SnippetKey, value: string) {}

    retrieveSnippet(key: SnippetKey) : string {
        throw new Error("Error in retrieveSnippet");
    }
}


describe("/tscode/tests/views/ContactItemViewTests", () => {
    it("should generate html from template and model", () => {
        var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });

        var contactItemView = new ccv.ContactItemView({ model: contactModel });
        var html = contactItemView.render().$el.html();

        //expect(html).toBe('<p>testName (testEmailAddress)</p>');
        expect(html).toContain('testName');
        expect(html).toContain('testEmailAddress');
    });

    describe("should handle errors with SnippetService ", () => {
        var currentSnippetService;
        beforeAll(() => {
            currentSnippetService = TypeScriptTinyIoC.resolve(IISnippetService);
            var errorService = new SnippetServiceRetrieveThrows();
            TypeScriptTinyIoC.register(errorService, IISnippetService);
        });

        it("should handle an error on constructor", () => {
            var contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });

            var contactItemView = new ccv.ContactItemView({ model: contactModel });
            var html = contactItemView.render().$el.html();
            expect(html).toContain('error');
            
        });

        afterAll(() => {
            TypeScriptTinyIoC.register(currentSnippetService, IISnippetService);
        });


    });
});