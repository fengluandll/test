let node = {type: "Identifier", name: "foo"},
    type = "Literal",
    name = 5;

function outputInfo(value) {
    console.log(value === node);
}

outputInfo({type, name} = node);
node.name = "foo2";

console.log(type);
console.log(name);

// "Identifier" // "foo"

let node2 = {type: "Identifier", name: "foo"};
const equal = node === node2;
console.log("node == node2: ", equal)
