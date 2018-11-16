package c03;

import org.junit.Before;

import static org.junit.Assert.*;

public class TimelineTest {

    private ItemProvider itemProvider;
    private Timeline timeline;

    @Before
    public void setUp() throws Exception {
        itemProvider = ???;
        timeline = new Timeline(itemProvider);
    }
}