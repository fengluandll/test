import React from 'react';
import NewInvestment from './components/NewInvestment.jsx';
import InvestmentList from './components/InvestmentList.jsx';
import Investment from './Investment';
import Stock from './Stock';


module.exports = React.createClass({
  getInitialState: function () {
    return {
      investments: []
    };
  },

  render: function () {
    return <div>
      <h1>Investment Tracking Application</h1>
      <p>Add investments and track their return of investment</p>
      <NewInvestment onCreate={this._handleCreateInvestment} />
      <InvestmentList investments={this.state.investments} onClickDelete={this._handleDeleteInvestment}/>
    </div>;
  },

  _handleCreateInvestment: function (investmentAttributes) {
    var that = this;
    var investments = this.state.investments;

    var investment = new Investment ({
      stock: new Stock({ symbol: investmentAttributes.stockSymbol }),
      shares: investmentAttributes.shares,
      sharePrice: investmentAttributes.sharePrice
    });

    investment.stock.fetch({ success: function () {
      that.forceUpdate();
    }});

    investments.push(investment);
    this.setState({ investments: investments });
  },

  _handleDeleteInvestment: function (investment) {
    var investments = this.state.investments;

    var index = investments.indexOf(investment);
    investments.splice(index, 1);
    this.setState({ investments: investments });
  }
});
