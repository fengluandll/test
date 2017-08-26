'use strict';

app.filter('seniorEmployeesFltr', function () {
  return function (items) {
    return _.filter(items, function (item) {
      return _item.age >= 58;
    });
  };
});
