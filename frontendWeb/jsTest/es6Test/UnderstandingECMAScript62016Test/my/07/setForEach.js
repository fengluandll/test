let set = new Set([1,2]);

set.forEach(function (value,key,ownerSet) {
    console.log(key + ' ' + value);
    console.log(ownerSet == set);
});