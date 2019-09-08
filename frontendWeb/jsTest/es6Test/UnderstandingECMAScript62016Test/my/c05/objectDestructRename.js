let node = {
    type: "Identifier",
    name: "foo"
};

let {type: localType, name: localName} = node;
console.log(localType);
console.log(localName);
