(function (React) {
  var NewInvestment = React.createClass({
    getInitialState: function () {
      return {
        stockSymbol: '',
        shares: 0,
        sharePrice: 0
      };
    },

    render: function () {
      var state = this.state;

      return <form className="new-investment" onSubmit={this._handleSubmit}>
        <h1>New investment</h1>
        <label>
          Symbol:
          <input type="text" ref="stockSymbol" className="new-investment-stock-symbol" value={state.stockSymbol} maxLength="4" onChange={this._handleStockSymbolChange}/>
        </label>
        <label>
          Shares:
          <input type="number" className="new-investment-shares" value={state.shares} onChange={this._handleSharesChange}/>
        </label>
        <label>
          Share price:
          <input type="number" className="new-investment-share-price" value={state.sharePrice} onChange={this._handleSharePriceChange}/>
        </label>
        <input type="submit" className="new-investment-submit" value="Add"/>
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

    _handleStockSymbolChange: function (event) {
      this.setState({ stockSymbol: event.target.value });
    },

    _handleSharesChange: function (event) {
      this.setState({ shares: event.target.value });
    },

    _handleSharePriceChange: function (event) {
      this.setState({ sharePrice: event.target.value });
    },

    _handleSubmit: function (event) {
      event.preventDefault();
      this.createInvestment();
    }
  });

  this.NewInvestment = NewInvestment;
})(React);
