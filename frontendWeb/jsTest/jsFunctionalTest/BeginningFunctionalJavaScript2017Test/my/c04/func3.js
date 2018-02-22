let global = "global"

function outer() {
    let outer = "outer"

    function inner() {
        let a = 5;
        console.log(outer)
    }

    inner() //call the inner function.
}

outer();