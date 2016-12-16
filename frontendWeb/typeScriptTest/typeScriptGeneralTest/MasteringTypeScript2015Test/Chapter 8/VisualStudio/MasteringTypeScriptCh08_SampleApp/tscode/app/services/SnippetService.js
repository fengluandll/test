var SnippetKey;
(function (SnippetKey) {
    SnippetKey[SnippetKey["CONTACT_ITEM_SNIPPET"] = 0] = "CONTACT_ITEM_SNIPPET";
    SnippetKey[SnippetKey["OTHER_SNIPPET"] = 1] = "OTHER_SNIPPET";
})(SnippetKey || (SnippetKey = {}));
var IISnippetService = (function () {
    function IISnippetService() {
        this.methodNames = ["storeSnippet", "retrieveSnippet"];
        this.className = "IISnippetService";
    }
    return IISnippetService;
})();
var SnippetService = (function () {
    function SnippetService() {
        this.snippetArray = new Array();
    }
    SnippetService.prototype.storeSnippet = function (key, value) {
        this.snippetArray[key] = value;
    };
    SnippetService.prototype.retrieveSnippet = function (key) {
        if (!this.snippetArray[key]) {
            throw new Error("SnippetService no snippet with key :" + key);
        }
        return this.snippetArray[key];
    };
    return SnippetService;
})();
//# sourceMappingURL=SnippetService.js.map