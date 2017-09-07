import java.util.Optional;
import java.util.stream.Stream;

public class StreamMax {
    public static void main(String[] args) {
        Optional<String> largest = Stream.of("xy","ab")
                .max(String::compareToIgnoreCase);
        System.out.println("largest: " + largest.orElse(""));
    }
}
