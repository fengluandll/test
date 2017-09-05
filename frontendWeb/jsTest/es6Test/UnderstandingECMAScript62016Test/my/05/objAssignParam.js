let node = {
    type: "identifier",
    name: "foo"
};

type ="2";
name = "x";

function outputInfo(value) {
    console.log(value === node);
}

outputInfo({type,name} = node);

console.log(type);
console.log(name);