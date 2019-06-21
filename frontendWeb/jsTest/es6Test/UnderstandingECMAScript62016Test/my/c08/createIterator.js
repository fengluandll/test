function createIterator(items) {
    let i = 0;
    return {
        next: function () {
            const done = (i >= items.length);
            const value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
