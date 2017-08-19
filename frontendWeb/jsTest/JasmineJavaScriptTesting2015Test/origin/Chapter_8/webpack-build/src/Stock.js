import $ from 'jquery';


function Stock (params) {
  params = params || {};
  this.symbol = params.symbol;
  this.sharePrice = params.sharePrice;
}


Stock.prototype.fetch = function(params) {
  params = params || {};
  var that = this;
  var success = params.success || function () {};
  var url = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol = "'+ that.symbol +'"&format=json&env=http://datatables.org/alltables.env&callback=?';

  $.getJSON(url, function (data) {
    var yahooStock = data.query.results.quote;
    that.sharePrice = parseFloat(yahooStock.LastTradePriceOnly);
    success(that);
  });
};


export default Stock;
