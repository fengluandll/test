let node = {
    type: "identifier",
    name: "foo"
};

let type;
let name;

({type,name} = node);

console.log(type);
console.log(name);