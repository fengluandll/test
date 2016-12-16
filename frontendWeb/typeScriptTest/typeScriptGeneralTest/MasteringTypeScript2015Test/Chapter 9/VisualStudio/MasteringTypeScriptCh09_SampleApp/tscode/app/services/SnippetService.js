var SnippetKey;
(function (SnippetKey) {
    SnippetKey[SnippetKey["PAGE_VIEW_LAYOUT_SNIPPET"] = 0] = "PAGE_VIEW_LAYOUT_SNIPPET";
    //FILTER_COLLECTION_SNIPPET,
    SnippetKey[SnippetKey["FILTER_MODEL_VIEW_SNIPPET"] = 1] = "FILTER_MODEL_VIEW_SNIPPET";
    SnippetKey[SnippetKey["BOARD_VIEW_SNIPPET"] = 2] = "BOARD_VIEW_SNIPPET";
    SnippetKey[SnippetKey["BOARD_SIZE_MINI_VIEW_SNIPPET"] = 3] = "BOARD_SIZE_MINI_VIEW_SNIPPET";
    SnippetKey[SnippetKey["BOARD_DETAIL_VIEW_SNIPPET"] = 4] = "BOARD_DETAIL_VIEW_SNIPPET";
    SnippetKey[SnippetKey["BOARD_SIZE_VIEW_SNIPPET"] = 5] = "BOARD_SIZE_VIEW_SNIPPET";
    SnippetKey[SnippetKey["OTHER_SNIPPET"] = 6] = "OTHER_SNIPPET";
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