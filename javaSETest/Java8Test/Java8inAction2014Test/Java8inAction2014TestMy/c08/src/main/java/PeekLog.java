import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class PeekLog {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3);
        List<Integer> result =
                numbers.stream()
                .peek(x -> System.out.println("From stream: " + x))
                .map(x -> x + 17)
                .peek(x -> System.out.println("After map: " + x))
                .filter( x -> x % 2 == 0)
                .peek(x -> System.out.println("after filter: " + x))
                .limit(3)
                .peek(x -> System.out.println("after limit: " + x))
                .collect(Collectors.toList());
    }
}
