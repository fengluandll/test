package c04;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.*;

public class StockBrokerTest {
    @Mock
    MarketWatcher marketWatcher;

    @Mock
    Portfolio portfolio;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void sanity() {
        assertNotNull(marketWatcher);
        assertNotNull(portfolio);
    }
}