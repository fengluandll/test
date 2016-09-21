import java.util.Arrays;

/**
 * Created by Allbts-IT on 21/09/2016.
 */
public class CompareStringIgnoreCase {
    public static void main(String[] args) {
        String a[] = {"yun Zhang", "bo yang lu","ABC","xyz"};
        Arrays.sort(a,String::compareToIgnoreCase);
        System.out.println(Arrays.toString(a));
    }
}
