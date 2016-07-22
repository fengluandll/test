uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++;
}

for (var i = 0; i < 10; i++) {
    console.log('unique integer: ' + uniqueInteger());
}
