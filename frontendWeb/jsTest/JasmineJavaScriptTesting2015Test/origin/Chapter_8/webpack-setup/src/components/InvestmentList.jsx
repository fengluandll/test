import React from 'react';
import InvestmentListItem from './InvestmentListItem.jsx';


var InvestmentList = React.createClass({
  getDefaultProps: function () {
    return { onClickDelete: function () {} };
  },

  render: function () {
    var onClickDelete = this.props.onClickDelete;

    var listItems = this.props.investments.map(function (investment) {
      return <InvestmentListItem
                  investment={investment}
                  onClickDelete={onClickDelete.bind(null, investment)}/>;
    });

    return <ul className="investment-list">{listItems}</ul>;
  }
});


export default InvestmentList;
