import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Allbts-IT on 20/09/2016.
 */
public class PredicateTest {

    public static void main(String[] args) {
        String a[] = {"abc",null,null,"cdef"};
        ArrayList<String> list = new ArrayList<>(Arrays.asList(a));
        System.out.println(list);
        list.removeIf(e -> e == null);
        System.out.println(list);
    }

}
