package c04;

import c04.dto.Stock;

public interface MarketWatcher {
   Stock getQuote(String symbol);
}
