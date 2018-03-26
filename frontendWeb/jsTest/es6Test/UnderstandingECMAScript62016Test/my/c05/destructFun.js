let node = {type: "Identifier", name: "foo"},
    type = "Literal",
    name = 5;

function outputInfo(value) {
    console.log(value === node);
}

outputInfo({type, name} = node);

console.log(type);
console.log(name);

// "Identifier" // "foo"