import React from 'react';
var cx = React.addons.classSet;


var InvestmentListItem = React.createClass({
  render: function () {
    var investment = this.props.investment;
    var onClickDelete = this.props.onClickDelete;

    var classes = cx({
      'investment': true,
      'good-investment': investment.isGood(),
      'bad-investment': !investment.isGood()
    });

    return <li className="investment-list-item">
      <article className={classes}>
        <h1 className="stock-symbol">{investment.stock.symbol.toUpperCase()}</h1>
        <span className="roi">{formatPercentage(investment.roi())}</span>
        <button className="delete-investment" onClick={onClickDelete}>Delete</button>
      </article>
    </li>;
  }
});


function formatPercentage (number) {
  return (number * 100).toFixed(0) + '%';
}


export default InvestmentListItem;
