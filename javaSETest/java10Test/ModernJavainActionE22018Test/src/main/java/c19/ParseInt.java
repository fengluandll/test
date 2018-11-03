package c19;

import java.util.function.Function;

public class ParseInt {
    public static void main(String[] args) {
        Function<String, Integer> strToInt = Integer::parseInt;
    }
}
