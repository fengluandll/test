import java.util.Optional;
import java.util.stream.Stream;

public class StreamFirst {
    public static void main(String[] args) {
        Stream<String> words = Stream.of("Haha","Quit","Quiet");
        Optional<String> result = words.filter(s->s.startsWith("Q")).findFirst();
        System.out.println(result.orElse("not found"));
    }
}
