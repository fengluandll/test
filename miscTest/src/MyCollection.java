import java.util.Set;

/**
 * Created by YunZhang on 13/12/16.
 */
public class MyCollection<T> {
    private Set<T> set;

    public Set<T> getCollection(){
        return this.set;
    }

    public void TestCollection(MyCollection<?> collection){
        Set set = collection.getCollection();
    }

    public static void main(String[] args) {
        MyCollection<String> stringMyCollection = new MyCollection<>();
        stringMyCollection.TestCollection(stringMyCollection);

    }
}
