describe("NewInvestment", function() {
  var TestUtils = React.addons.TestUtils;
  var component, stockSymbol, shares, sharePrice;

  function findNodeWithClass (clazz) {
    return TestUtils.findRenderedDOMComponentWithClass(component, clazz).getDOMNode();
  }

  beforeEach(function() {
    onCreateSpy = jasmine.createSpy('onCreateSpy');
    component = TestUtils.renderIntoDocument(
      <NewInvestment onCreate={onCreateSpy}/>
    );

    form = component.getDOMNode();
    stockSymbol = findNodeWithClass('new-investment-stock-symbol');
    shares = findNodeWithClass('new-investment-shares');
    sharePrice = findNodeWithClass('new-investment-share-price');
  });

  describe("with its inputs correctly filled", function() {
    beforeEach(function() {
      TestUtils.Simulate.change(stockSymbol, { target: { value: 'AOUE' }});
      TestUtils.Simulate.change(shares, { target: { value: '100' }});
      TestUtils.Simulate.change(sharePrice, { target: { value: '20' }});
    });

    describe("when its add button is clicked", function() {
      beforeEach(function() {
        TestUtils.Simulate.submit(form);
      });

      it("should invoke the 'onCreate' callback with the filled investment attributes", function() {
        var investmentAttributes = { stockSymbol: 'AOUE', shares: '100', sharePrice: '20' };

        expect(onCreateSpy).toHaveBeenCalledWith(investmentAttributes);
      });
    });
  });
});
