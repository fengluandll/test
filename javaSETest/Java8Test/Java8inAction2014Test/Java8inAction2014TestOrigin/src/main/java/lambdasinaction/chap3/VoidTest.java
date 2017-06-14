package lambdasinaction.chap3;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class VoidTest {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Predicate<String> p = s -> list.add(s);
        Consumer<String> c = s->list.add(s);
    }
}
