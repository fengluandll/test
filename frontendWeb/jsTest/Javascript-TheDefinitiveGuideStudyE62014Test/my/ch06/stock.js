function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}

function getvalue(portfolio) {
    
    var total = 0.0;
    for(stock in portfolio) { // For each stock in the portfolio:
        var shares = portfolio[stock]; // get the number of shares
        var price = getquote(stock); // look up share price
        total += shares * price; // add stock value to total value
    }
    return total; // Return total value.
}

function getquote(stockName){
    return stockName.length;
}

var portfolio = {};
for(var i = 0;i < 5; i++){
    portfolio["stock" + i] = i;
}

console.log('portfolio value is: ' + getvalue(portfolio));