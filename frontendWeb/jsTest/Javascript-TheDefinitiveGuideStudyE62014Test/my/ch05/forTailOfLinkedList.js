//find the tail and print it.
function tail(o) {
    for (; o.next; o = o.next);
    /*empty*/
    return o;
}

var linkedList = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
};

var tail = tail(linkedList);
console.log("tail is " + tail.data)