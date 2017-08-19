import Stock from '../src/Stock';
import $ from 'jquery';


describe("Stock", function() {
  var stock;
  var originalSharePrice = 0;

  beforeEach(function() {
    stock = new Stock({
      symbol: 'AOUE',
      sharePrice: originalSharePrice
    });
  });

  it("should have a share price", function() {
    expect(stock.sharePrice).toEqual(originalSharePrice);
  });

  describe("when fetched", function() {
    beforeEach(function() {
      spyOn($, 'getJSON').and.callFake(function(url, callback) {
        callback({ query: { results: { quote: { LastTradePriceOnly: 20.13 } } }});
      });

      stock.fetch();
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.13);
    });
  });
});
