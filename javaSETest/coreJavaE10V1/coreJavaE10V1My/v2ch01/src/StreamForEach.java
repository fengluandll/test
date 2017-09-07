import java.util.stream.Stream;

public class StreamForEach {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("ab","cd");
        stream.forEach(System.out::println);
    }
}
