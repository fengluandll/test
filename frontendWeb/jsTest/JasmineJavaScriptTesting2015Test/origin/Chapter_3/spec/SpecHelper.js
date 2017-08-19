beforeEach(function() {

  jasmine.addMatchers({
    toBeAGoodInvestment: function () {

      return {
        compare: function (actual, expected) {
          var result = {};
          result.pass = actual.isGood();

          if (result.pass) {
            result.message = 'Expected investment to be a bad investment';
          } else {
            result.message = 'Expected investment to be a good investment';
          }

          return result;
        }
      };
    }
  });
});

jasmine.getFixtures().fixturesPath = 'spec/fixtures';
