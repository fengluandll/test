let x = 3;
function random(randomize) {
    if (randomize){
        let x = Math.random();
        return x;
    }
    return x;
}
console.log(random(false)); //3