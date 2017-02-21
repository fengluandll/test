function print(name:string, ...restOfName: number[]){
    return name + " " + restOfName.join(" ");
}
console.log(print("a", "b", "c"));