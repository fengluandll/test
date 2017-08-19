import React from 'react/addons';


var NewInvestment = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      stockSymbol: '',
      shares: 0,
      sharePrice: 0
    };
  },

  componentDidMount: function () {
    this.refs.stockSymbol.getDOMNode().focus();
  },

  render: function () {
    return <form className="new-investment" onSubmit={this._handleSubmit}>
      <h1>New investment</h1>
      <label>
        Symbol:
        <input type="text" ref="stockSymbol" className="new-investment-stock-symbol" valueLink={this.linkState('stockSymbol')} maxLength="4" />
      </label>
      <label>
        Shares:
        <input type="number" className="new-investment-shares" valueLink={this.linkState('shares')} />
      </label>
      <label>
        Share price:
        <input type="number" className="new-investment-share-price" valueLink={this.linkState('sharePrice')} />
      </label>
      <input type="submit" className="new-investment-submit" value="Add" disabled={!isValidInput(this.state)} />
    </form>;
  },

  createInvestment: function () {
    var investment = {
      stockSymbol: this.state.stockSymbol,
      shares: this.state.shares,
      sharePrice: this.state.sharePrice
    };

    this.props.onCreate(investment);
  },

  clearInput: function () {
    var that = this;

    this.setState({
      stockSymbol: '',
      shares: 0,
      sharePrice: 0
    }, function () {
      that.refs.stockSymbol.getDOMNode().focus();
    });
  },

  _handleSubmit: function (event) {
    event.preventDefault();
    this.createInvestment();
    this.clearInput();
  }
});


function isValidInput (state) {
  return state.stockSymbol.length > 0 &&
         state.shares > 0 &&
         state.sharePrice > 0;
}


export default NewInvestment;
