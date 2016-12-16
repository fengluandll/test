enum SnippetKey {
    CONTACT_ITEM_SNIPPET,
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


