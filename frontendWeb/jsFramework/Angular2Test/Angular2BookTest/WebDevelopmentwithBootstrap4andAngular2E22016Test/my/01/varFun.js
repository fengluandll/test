var x = 3;
function random(randomize) {
    if (randomize){
        var x = Math.random();
        return x;
    }
    return x;
}
console.log(random(false));