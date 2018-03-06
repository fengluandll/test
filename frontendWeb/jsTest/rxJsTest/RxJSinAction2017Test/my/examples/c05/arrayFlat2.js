const source = [1, 2, 3];

const a1 = source.map(value => Array(value).fill(value));
console.log(a1);

const a2 = source.map(value => Array(value).fill(value)).reduce(function (a,b) {
    return a.concat(b);
},[]);
console.log(a2);
