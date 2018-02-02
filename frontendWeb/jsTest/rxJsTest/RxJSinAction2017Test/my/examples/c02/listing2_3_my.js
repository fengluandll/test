function * fibonacci() {
    let first = 1, second = 1;

    while(true){
        let sum = first + second;
        yield sum;
        first = second;
        second = sum;
    }
}

const iter = fibonacci();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
