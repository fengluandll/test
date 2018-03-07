function* fibonacci() {
    let first = 1, second = 1;
    for(;;) {
        let sum = second + first;
        yield sum;
        first = second;
        second = sum;
    }
}

const iter = fibonacci();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());