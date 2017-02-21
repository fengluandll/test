/**
 * Created by YunZhang on 21/2/17.
 */
var result = [1,2,3]
    .reduce(function (total, current) {
        return total + current;
    },0);
console.log(result);