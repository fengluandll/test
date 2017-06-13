package lambdasinaction.chap3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * Created by YunZhang on 13/6/17.
 */
public class PredicateTest {
    public static <T> List<T> filter(List<T> list, Predicate<T> p){
        List<T> results = new ArrayList<>();
        for (T s: list
             ) {
            if (p.test(s)){
                results.add(s);
            }
        }

        return results;
    }

    public static void main(String[] args) {
        List<String> listOfStrings = Arrays.asList("a","","c");
        Predicate<String> nonEmptyStringPredicate = (String s)->!s.isEmpty();
        List<String> noEmpty = filter(listOfStrings,nonEmptyStringPredicate);
        System.out.println(noEmpty);
    }
}
