/**
 * Created by Allbts-IT on 20/09/2016.
 */

import java.util.Arrays;
import java.util.function.BiFunction;

public class BiFunctionTest {
    public static void main(String[] args) {

        String a[] = {"abc","aa","a"};

        BiFunction<String,String,Integer> comp = (first,second) -> first.length() - second.length();
        Arrays.sort(a, (first,second) -> first.length() - second.length() );
        System.out.println(Arrays.toString(a));
    }
}
