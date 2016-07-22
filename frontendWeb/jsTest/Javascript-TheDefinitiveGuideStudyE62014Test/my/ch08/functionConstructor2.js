var scope = "global";
function constructFunction() {
    var scope = "local";
    return new Function("return scope"); // Does not capture the local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
constructFunction()(); // => "global"

console.log(constructFunction()());