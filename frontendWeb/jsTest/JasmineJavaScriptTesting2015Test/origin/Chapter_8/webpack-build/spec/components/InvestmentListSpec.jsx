import React from 'react/addons';
import Investment from '../../src/Investment';
import Stock from '../../src/Stock';
import InvestmentList from '../../src/components/InvestmentList.jsx';


describe("InvestmentList", function() {
  var TestUtils = React.addons.TestUtils;

  describe("given a list of Investments", function() {
    var investments, component, onClickDelete;

    beforeEach(function() {
      investments = [
        new Investment({
          stock: new Stock({ symbol: 'peto', sharePrice: 0.25 }),
          shares: 100,
          sharePrice: 0.20
        }),
        new Investment({
          stock: new Stock({ symbol: 'yaya', sharePrice: 0.3 }),
          shares: 200,
          sharePrice: 0.45
        }),
      ];

      onClickDelete = jasmine.createSpy('onClickDelete');

      component = TestUtils.renderIntoDocument(
        <InvestmentList investments={investments} onClickDelete={onClickDelete}/>
      );
    });

    it("should render the investments", function() {
      var listItems = TestUtils.scryRenderedDOMComponentsWithClass(component, 'investment-list-item');
      expect(listItems.length).toEqual(2);
    });

    it("should trigger a onClickDelete event with the corresponding investment on clicking a delete button", function() {
      var firstInvestment = TestUtils.scryRenderedDOMComponentsWithClass(component, 'investment-list-item')[0];
      var deleteButton = TestUtils.findRenderedDOMComponentWithTag(firstInvestment, 'button');
      TestUtils.Simulate.click(deleteButton);
      expect(onClickDelete).toHaveBeenCalled();
      expect(onClickDelete.calls.argsFor(0)[0]).toBe(investments[0]);
    });
  });
});
