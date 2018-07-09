const restaurant = {
  soda: 2,
  burger: 1
};

const restHandler = {
    get: function (target, property) {
        if (property in target && target[property] > 0) {
            target[property] -= 1;
            return `Enjoy your ${property}`;
        }
        return `Sorry, We are out of ${property}s!`;
    }
};

const restProxy = new Proxy(restaurant, restHandler);
console.log(restProxy.soda);
console.log(restProxy.soda);
console.log(restProxy.soda);
console.log(restProxy.burger);
console.log(restProxy.burger);
