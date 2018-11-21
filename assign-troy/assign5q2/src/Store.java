import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Store implements Serializable {

    private List<InventoryItem> inventoryItems = new ArrayList<>();

    void createSampleInventoryItems() {
        inventoryItems.add(new InventoryItem("Plate", 3));
        inventoryItems.add(new InventoryItem("Cup", 2));
        inventoryItems.add(new InventoryItem("Knife", 4));
    }

    void sortInventoryItems() {
        Collections.sort(inventoryItems);
    }

    public List<InventoryItem> getInventoryItems() {
        return inventoryItems;
    }
}
