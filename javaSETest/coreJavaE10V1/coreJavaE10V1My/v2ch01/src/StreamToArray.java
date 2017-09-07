import java.util.stream.Stream;

public class StreamToArray {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("ab","df");
        String[] result = stream.toArray(String[]::new);
        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }
    }
}
