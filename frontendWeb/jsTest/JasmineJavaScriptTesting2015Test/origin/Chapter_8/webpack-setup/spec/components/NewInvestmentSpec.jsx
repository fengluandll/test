import React from 'react';
import NewInvestment from '../../src/components/NewInvestment.jsx';


/**
  Uses jasmine-jquery fixtures to actualy render in the document.
  React.TestUtils.renderIntoDocument renders in a detached node.

  This was required to test the focus behavior.
 */
function actuallyRender (component) {
  setFixtures('<div id="application-container"></div>');
  var container = document.getElementById('application-container');
  return React.render(component, container);
}


describe("NewInvestment", function() {
  var TestUtils = React.addons.TestUtils;
  var component, stockSymbol, shares, sharePrice, submitButton, onCreateSpy, form;

  function findNodeWithClass (clazz) {
    return TestUtils.findRenderedDOMComponentWithClass(component, clazz).getDOMNode();
  }

  beforeEach(function() {
    onCreateSpy = jasmine.createSpy('onCreateSpy');
    component = actuallyRender(<NewInvestment onCreate={onCreateSpy}/>);

    form = component.getDOMNode();
    stockSymbol = findNodeWithClass('new-investment-stock-symbol');
    shares = findNodeWithClass('new-investment-shares');
    sharePrice = findNodeWithClass('new-investment-share-price');
    submitButton = findNodeWithClass('new-investment-submit');
  });

  it("should allow the input of the stock symbol", function() {
    expect(stockSymbol).toBeMatchedBy('input[type=text]');
  });

  it("should allow the input of shares", function() {
    expect(shares).toBeMatchedBy('input[type=number]');
  });

  it("should allow the input of the share price", function() {
    expect(sharePrice).toBeMatchedBy('input[type=number]');
  });

  itShouldBeAtTheDefaultState();

  describe("with its inputs correctly filled", function() {
    beforeEach(function() {
      TestUtils.Simulate.change(stockSymbol, { target: { value: 'AOUE' }});
      TestUtils.Simulate.change(shares, { target: { value: '100' }});
      TestUtils.Simulate.change(sharePrice, { target: { value: '20' }});
    });

    it("should allow to add", function() {
      expect(submitButton).not.toBeDisabled();
    });

    describe("when its add button is clicked", function() {
      beforeEach(function() {
        TestUtils.Simulate.submit(form);
      });

      it("should invoke the 'onCreate' callback with the filled investment attributes", function() {
        var investmentAttributes = { stockSymbol: 'AOUE', shares: '100', sharePrice: '20' };

        expect(onCreateSpy).toHaveBeenCalled();
        expect(onCreateSpy).toHaveBeenCalledWith(investmentAttributes);
      });

      itShouldBeAtTheDefaultState();
    });

    describe("when the stock input is cleared", function() {
      beforeEach(function() {
        TestUtils.Simulate.change(stockSymbol, { target: { value: '' }});
      });

      itShouldNotAllowToAdd();
    });

    describe("when the shares input is cleared", function() {
      beforeEach(function() {
        TestUtils.Simulate.change(shares, { target: { value: '' }});
      });

      itShouldNotAllowToAdd();
    });

    describe("when the share price input is cleared", function() {
      beforeEach(function() {
        TestUtils.Simulate.change(sharePrice, { target: { value: '' }});
      });

      itShouldNotAllowToAdd();
    });
  });

  // shared specs

  function itShouldNotAllowToAdd () {
    it("should not allow to add", function() {
      expect(submitButton).toBeDisabled();
    });
  }

  function itShouldBeAtTheDefaultState () {
    it("should have an empty stock symbol", function() {
      expect(stockSymbol).toHaveValue('');
    });

    it("should have its shares value to zero", function() {
      expect(shares).toHaveValue('0');
    });

    it("should have its share price value to zero", function() {
      expect(sharePrice).toHaveAttr('value', '0');
    });

    it("should have its stock symbol input on focus", function() {
      expect(stockSymbol).toBeFocused();
    });

    itShouldNotAllowToAdd();
  }
});
