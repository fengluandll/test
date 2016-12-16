describe("/tscode/tests/services/SnippetServiceTests.ts", function () {
    it("should store a snippet", function () {
        var snippetService = new SnippetService();
        snippetService.storeSnippet(0 /* CONTACT_ITEM_SNIPPET */, "contact_snippet");
        expect(snippetService.retrieveSnippet(0 /* CONTACT_ITEM_SNIPPET */)).toBe("contact_snippet");
    });
});
//# sourceMappingURL=SnippetServiceTests.js.map