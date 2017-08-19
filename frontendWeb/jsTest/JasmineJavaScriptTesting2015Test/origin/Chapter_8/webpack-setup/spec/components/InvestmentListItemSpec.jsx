import React from 'react';
import Investment from '../../src/Investment';
import Stock from '../../src/Stock';
import InvestmentListItem from '../../src/components/InvestmentListItem.jsx';


describe("InvestmentListItem", function() {
  var TestUtils = React.addons.TestUtils;

  describe("given an Investment", function() {
    var investment, component, onClickDelete;

    beforeEach(function() {
      investment = new Investment({
        stock: new Stock({ symbol: 'peto', sharePrice: 0.25 }),
        shares: 100,
        sharePrice: 0.20
      });

      onClickDelete = jasmine.createSpy('onClickDelete');

      component = TestUtils.renderIntoDocument(
        <InvestmentListItem investment={investment} onClickDelete={onClickDelete}/>
      );
    });

    it("should render the symbol in uppercase", function() {
      var symbol = TestUtils.findRenderedDOMComponentWithClass(component, 'stock-symbol');
      expect(symbol.getDOMNode()).toHaveText('PETO');
    });

    it("should render the return of investment as a percentage", function() {
      var roi = TestUtils.findRenderedDOMComponentWithClass(component, 'roi');
      expect(roi.getDOMNode()).toHaveText('25%');
    });

    describe("delete button", function() {
      var deleteButton;

      beforeEach(function() {
        deleteButton = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      });

      it("should render a button that allows it to be deleted", function() {
        expect(deleteButton.getDOMNode()).toHaveClass('delete-investment');
        expect(deleteButton.getDOMNode()).toHaveText('Delete');
      });

      it("should notify an observer onClickDelete when the button is clicked", function() {
        TestUtils.Simulate.click(deleteButton);
        expect(onClickDelete).toHaveBeenCalled();
      });
    });

  });
});
