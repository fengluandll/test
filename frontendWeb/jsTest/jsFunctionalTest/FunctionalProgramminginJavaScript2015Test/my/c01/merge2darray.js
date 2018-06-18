varmerge2dArrayIntoOne2 = function (arrays) {
  return arrays.reduce(function (p, n) {
    return p.concat(n);
  });
};
var twoD = [[1,2],[3,4]];
var result = varmerge2dArrayIntoOne2(twoD);
console.log(result);