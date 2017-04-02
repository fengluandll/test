import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * Created by yunzhang on 3/4/17.
 */
public class Range {
    public static void main(String[] args) {
        IntStream zeroToNinetyNine = IntStream.range(0,100);
        System.out.println(zeroToNinetyNine.boxed().collect(Collectors.toList()));

        IntStream numStream = IntStream.rangeClosed(0,100);
        System.out.println(numStream.boxed().collect(Collectors.toList()));
    }
}
