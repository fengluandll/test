import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by yunzhang on 3/4/17.
 */
public class Substr {
    public static void main(String[] args) {
        Stream<String> words = Stream.of("Ac","Bbr  ");
        Stream<String> substrs = words.map(s -> s.substring(0,1));
        System.out.println(substrs.collect(Collectors.toList()));
//        System.out.println(lowercaseWords.collect());
    }
}
