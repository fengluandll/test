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
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    beforeEach(function() {
      stock.fetch();

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 200,
        'contentType': 'application/json',
        'responseText': '{ "sharePrice": 20.18 }'
      });
    });

    it("should make a request to the stocks API", function() {
      expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost:8000/stocks/AOUE');
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.18);
    });
  });
});
