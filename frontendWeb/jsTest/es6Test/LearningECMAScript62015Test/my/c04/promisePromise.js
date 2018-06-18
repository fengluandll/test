var a = new Promise(function (resolve, reject) {
   var b = new Promise(res, rej);
   resolve(b);
});