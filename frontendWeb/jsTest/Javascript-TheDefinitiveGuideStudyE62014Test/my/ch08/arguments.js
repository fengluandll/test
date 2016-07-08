function f(x) {
    console.log(x); // Displays the initial value of the argument
    arguments[0] = null; // Changing the array element also changes x!
    console.log(x); // Now displays "null"
}

f('hello');