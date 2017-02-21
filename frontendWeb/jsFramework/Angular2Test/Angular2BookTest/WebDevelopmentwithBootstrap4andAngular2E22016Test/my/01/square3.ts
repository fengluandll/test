function square(x: number = 0, y?: number){
if (y){
    return x * y;
}else{
    return x * x;
}
}

console.log(square(4)); //16
console.log(square(4, 5)); //20