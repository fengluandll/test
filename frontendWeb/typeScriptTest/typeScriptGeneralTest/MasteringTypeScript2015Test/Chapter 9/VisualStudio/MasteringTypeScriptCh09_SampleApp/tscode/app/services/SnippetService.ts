enum SnippetKey {
    PAGE_VIEW_LAYOUT_SNIPPET,
	//FILTER_COLLECTION_SNIPPET,
	FILTER_MODEL_VIEW_SNIPPET,
	BOARD_VIEW_SNIPPET,
	BOARD_SIZE_MINI_VIEW_SNIPPET,
	BOARD_DETAIL_VIEW_SNIPPET,
	BOARD_SIZE_VIEW_SNIPPET,
    OTHER_SNIPPET,
}

interface ISnippetService {
    storeSnippet(key: SnippetKey, value: string): void;
    retrieveSnippet(key: SnippetKey): string;
}

class IISnippetService implements IInterfaceChecker {
    methodNames: string[] = ["storeSnippet", "retrieveSnippet"];
    className: string = "IISnippetService";
}

class SnippetService implements ISnippetService {
    private snippetArray: string[] = new Array();
    public storeSnippet(key: SnippetKey, value: string) {
        this.snippetArray[key] = value;
    }
    public retrieveSnippet(key: SnippetKey) {
        if (!this.snippetArray[key]) {
            throw new Error("SnippetService no snippet with key :" + key);
        }
        return this.snippetArray[key];
    }
}


