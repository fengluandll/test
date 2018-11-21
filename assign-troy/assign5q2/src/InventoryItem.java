import java.io.Serializable;

public class InventoryItem implements Comparable<InventoryItem>, Serializable {
    private String name;
    private int uniqueItemId;

    public InventoryItem(String name, int uniqueItemId) {
        this.name = name;
        this.uniqueItemId = uniqueItemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getUniqueItemId() {
        return uniqueItemId;
    }

    public void setUniqueItemId(int uniqueItemId) {
        this.uniqueItemId = uniqueItemId;
    }

    @Override
    public int compareTo(InventoryItem o) {
        if (uniqueItemId == o.uniqueItemId) {
            return 0;
        } else if (uniqueItemId < o.uniqueItemId) {
            return -1;
        } else {
            return 1;
        }
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{");
        sb.append("name='").append(name).append('\'');
        sb.append(", uniqueItemId=").append(uniqueItemId);
        sb.append('}');
        return sb.toString();
    }
}
