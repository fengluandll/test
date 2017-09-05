function *createIterator(items) {
    for (var i = 0; i < items.length; i++) {
        yield items[i];
    }
}

let iterator = createIterator([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());