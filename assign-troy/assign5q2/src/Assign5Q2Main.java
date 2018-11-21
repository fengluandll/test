import java.io.*;

public class Assign5Q2Main {

    public static void main(String[] args) {
	    Store store = new Store();
	    store.createSampleInventoryItems();
        System.out.println("Created inventory items:" + store.getInventoryItems());

        final File file = new File("Store.ser");
        ObjectOutputStream objectOutputStream = null;
        try {
            // serialize objects
            objectOutputStream = new ObjectOutputStream(new FileOutputStream(file));
            objectOutputStream.writeObject(store);
            System.out.println("Store was serialized to the file: " + file.getAbsolutePath());
            // sort objects
            store.sortInventoryItems();
            System.out.println("Sorted inventory items:" + store.getInventoryItems());

            ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(file));
            try {
                store = (Store)objectInputStream.readObject();
                System.out.println("Store was restored from the file: " + file.getAbsolutePath());
                System.out.println("Restored inventory items:" + store.getInventoryItems());
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (objectOutputStream != null) {
                try {
                    objectOutputStream.close();
                } catch (IOException e) {
                    System.out.println("Fail to close the object stream");
                }
            }
        }
    }
}
