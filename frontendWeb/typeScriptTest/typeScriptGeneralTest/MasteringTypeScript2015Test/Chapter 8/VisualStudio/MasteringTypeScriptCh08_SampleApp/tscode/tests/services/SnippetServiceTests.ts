describe("/tscode/tests/services/SnippetServiceTests.ts", () => {
    it("should store a snippet", () => {
        var snippetService = new SnippetService();
        snippetService.storeSnippet(
            SnippetKey.CONTACT_ITEM_SNIPPET, "contact_snippet");
        expect(
            snippetService.retrieveSnippet(SnippetKey.CONTACT_ITEM_SNIPPET)
        ).toBe("contact_snippet");
    });
});