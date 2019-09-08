let colors = ["red", "green", "blue"];
let [...clonedColors] = colors;
colors.push("purple");
console.log(clonedColors);
