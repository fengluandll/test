import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamLimit {
    public static void main(String[] args) {
        Stream<Double> randoms = Stream.generate(Math::random).limit(10);
        List<Double> result = randoms.collect(Collectors.toList());
        System.out.println(result);
    }
}
