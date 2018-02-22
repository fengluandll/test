var fn = (arg) => {
    let outer = "Visible"
    let innerFn = () => {
        console.log(outer)
        console.log(arg)

    }

    return innerFn
}

var closureFn = fn(5);
closureFn()