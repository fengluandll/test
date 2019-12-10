const sortDesc = arr => {
  return arr.sort(
      (a, b) => b - a
  );
};

const arr = [1,2,3,4,5,6,7,8,9];
sortDesc(arr); //-> [9,8,7,6,5,4,3,2,1]
console.log(arr);
