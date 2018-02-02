function BufferIterator(arr, bufferSize = 2) {
    this[Symbol.iterator] = function () {
        let nextIndex = 0;

        return {
            next: () => {
                if (nextIndex >= arr.length){
                    return {done: true};
                }
                else {
                    let buffer = new Array(bufferSize);
                    for (let i = 0 ; i < bufferSize ; i++) {
                        buffer[i] = (arr[nextIndex++]);
                    }
                    return {value: buffer, done: false};
                }
            }
        };
    };
}

const arr = [1, 2, 3, 4, 5, 6];

for (let i of new BufferIterator(arr, 2)) {
    console.log(i);
}

for (let i of new BufferIterator(arr,3)) {
    console.log(i);
}