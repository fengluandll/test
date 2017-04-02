import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by yunzhang on 3/4/17.
 */
public class LowerCase {
    public static void main(String[] args) {
        Stream<String> words = Stream.of("A","B");
        Stream<String> lowercaseWords = words.map(String::toLowerCase);
        List<String> result = lowercaseWords.collect(Collectors.toList());
        System.out.println(result);
//        System.out.println(lowercaseWords.collect());
    }
}
