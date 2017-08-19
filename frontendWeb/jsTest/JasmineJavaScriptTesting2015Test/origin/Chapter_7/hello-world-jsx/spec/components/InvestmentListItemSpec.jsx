describe("InvestmentListItem", function() {
  var TestUtils = React.addons.TestUtils;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <InvestmentListItem />
    );
  });

  it("should be a list item of an investment", function() {
    var el = component.getDOMNode();
    expect(el).toEqual('li.investment-list-item');
  });
});
