package c04;

import c04.dto.Stock;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.math.BigDecimal;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class StockBrokerTestStub {
    @Mock
    MarketWatcher marketWatcher;

    @Mock
    Portfolio portfolio;

    @Test
    public void marketWatcher_Returns_current_stock_status() {
        Stock uvsityCorp = new Stock("UV",
                "Uvsity Corporation",
                new BigDecimal("100.00"));
        when(marketWatcher.getQuote(anyString()))
                .thenReturn(uvsityCorp);
        assertNotNull(marketWatcher.getQuote("UV"));

    }
}