package c01;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class StoreLoop {
    public static void main(String[] args) {
        Consumer<Iterable> printObjects = list -> {
            for (Object it: list) {
                System.out.println(it);
            }
        };

        Consumer<Iterable> printObjects2 = list -> list.forEach(System.out::println);

        List<Integer> list = Arrays.asList(1,2,3);

    }
}
