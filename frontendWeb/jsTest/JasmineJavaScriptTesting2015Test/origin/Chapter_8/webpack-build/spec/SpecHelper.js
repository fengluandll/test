beforeEach(function() {
  // changes the default timeout for demonstration purposes
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  jasmine.addMatchers({
    toBeAGoodInvestment: function () {

      return {
        compare: function (actual) {
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
