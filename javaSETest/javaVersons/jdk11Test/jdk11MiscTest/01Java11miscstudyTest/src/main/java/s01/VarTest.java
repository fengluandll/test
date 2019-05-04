package s01;

import java.util.function.Function;

public class VarTest {
    public static void main(String[] args) {
        Function<String, String> append = (var string) -> string + " World";
        String appendedString = append.apply("Hello");
        System.out.println(appendedString);
    }
}
