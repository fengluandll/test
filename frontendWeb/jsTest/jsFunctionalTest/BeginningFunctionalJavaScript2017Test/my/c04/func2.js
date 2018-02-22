let global = 'global';

function outer() {
    function inner() {
        let a = 5;
        console.log(global)
    }

    inner() //call the inner function.
}

outer();