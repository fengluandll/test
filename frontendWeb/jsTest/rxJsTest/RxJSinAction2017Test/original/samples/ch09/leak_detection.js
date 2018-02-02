// Object.defineProperty(global, "name_of_leaking_property", {
//     set : function(value) {
//         throw new Error("Found the leak!");
//     }
// });
const expect = require('expect.js');

function average(arr) {
	let len = arr.length;
        total = arr.reduce((a, b) => a + b);
    return Math.floor(total / len);
}

describe('Average numbers', function () {
  it('Leak the variable total', function () {
		expect(average([80, 90, 100])).to.be(90);
   });
});