package lambdasinaction.chap5.my;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class UniqueChars {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("Hello", "World");

        List<String> uniqueCharacters =
                words.stream()
                .map(w -> w.split(""))
                .flatMap(Arrays::stream)
                .distinct()
                .collect(Collectors.toList());
        uniqueCharacters.forEach(System.out::println);
    }
}
