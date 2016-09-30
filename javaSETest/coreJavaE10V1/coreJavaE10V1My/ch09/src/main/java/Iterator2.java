import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedList;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class Iterator2 {
    public static void main(String[] args) {
        Collection<String> c = Arrays.asList("abc","def");
        java.util.Iterator<String> iter = c.iterator();
        while (iter.hasNext()) {
            String element = iter.next();
            System.out.println(element);
        }

        System.out.println("concisely");

        for (String element : c) {
            System.out.println(element);
        }
    }
}
