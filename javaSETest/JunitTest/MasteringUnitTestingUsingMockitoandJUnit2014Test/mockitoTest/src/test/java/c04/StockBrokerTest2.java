package c04;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(MockitoJUnitRunner.class)
public class StockBrokerTest2 {
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