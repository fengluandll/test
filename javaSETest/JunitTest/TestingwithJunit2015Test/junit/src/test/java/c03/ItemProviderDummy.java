package c03;

import java.util.List;

public class ItemProviderDummy implements ItemProvider {
    private static final String MESSAGE =
            "ummy method must never be called.";

    @Override
    public List<Item> fetchItems(Item ancestor, int itemCount) {
        throw new UnsupportedOperationException(MESSAGE);
    }

    @Override
    public int getNewCount(Item predecessor) {
        throw new UnsupportedOperationException(MESSAGE);
    }

    @Override
    public List<Item> fetchNew(Item predecessor) {
        throw new UnsupportedOperationException(MESSAGE);
    }
}
