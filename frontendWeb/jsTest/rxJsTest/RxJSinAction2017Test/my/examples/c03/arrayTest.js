const original = [1,2,3];

const result = original.filter((x,idx,arr) => {
    console.log(`filtering ${x}, same as original?
        ${original === arr}`);

    return x % 2 !== 0;
}).map((x,idx, arr)=>{
    console.log(`mapping, same as original? ${original === arr}`);
    return x * x;
});