import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class LettersMap {
    public static Stream<String> letters(String s){
        List<String> result = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            result.add(s.substring(i,i+1));
        }
        return result.stream();
    }

    public static void main(String[] args) {
        List<String> words = Arrays.asList("Your","boat");
        Stream<Stream<String>> result = words.stream().map(w->letters(w));
        System.out.println(result);
        Stream<String> flatResult = words.stream().flatMap(w->letters(w));
        System.out.println(flatResult);
    }
}
