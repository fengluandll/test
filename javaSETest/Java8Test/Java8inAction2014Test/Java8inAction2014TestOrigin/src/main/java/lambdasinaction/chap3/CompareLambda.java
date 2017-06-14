package lambdasinaction.chap3;

import java.util.Arrays;
import java.util.List;

public class CompareLambda {
    public static void main(String[] args) {
        List<String> str = Arrays.asList("a","b","A","B");
        str.sort( (s1,s2)->s1.compareToIgnoreCase(s2) );
        System.out.println(str);
    }
}
