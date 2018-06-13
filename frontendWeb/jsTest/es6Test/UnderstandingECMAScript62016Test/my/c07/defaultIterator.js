class Collection {
    constructor() {
        this.items = [];
    }

    * [Symbol.iterator]() {
        // yield this.items.values();
        for (let i = 0; i < this.items.length; i++) {
            yield this.items[i];
        }
    }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x);
}