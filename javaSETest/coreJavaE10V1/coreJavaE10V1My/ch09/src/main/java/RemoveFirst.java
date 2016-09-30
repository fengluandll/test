import java.util.*;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class RemoveFirst {
    public static void main(String[] args) {
        Collection<String> c = new ArrayList<>(Arrays.asList("abc","def"));
        Iterator<String> iter = c.iterator();
        iter.next();
        iter.remove();
        iter.forEachRemaining(element -> System.out.println(element));
    }
}
