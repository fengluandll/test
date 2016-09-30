import java.util.Arrays;
import java.util.Collection;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class IteratorLambda {
    public static void main(String[] args) {
        Collection<String> c = Arrays.asList("abc","def");
        java.util.Iterator<String> iter = c.iterator();
        iter.forEachRemaining(element -> System.out.println(element));
    }
}
