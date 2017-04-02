import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

/**
 * Created by yunzhang on 2/4/17.
 */
public class CountLongWordsStream {
    public static void main(String[] args) throws IOException {
        String contents = new String(Files.readAllBytes(Paths.get("alice.txt")), StandardCharsets.UTF_8);
        List<String> words = Arrays.asList(contents.split("[\\P{L}+]"));
        long count = words.stream().filter(w->w.length() > 12).count();

        System.out.println("long words: " + count);
    }
}
