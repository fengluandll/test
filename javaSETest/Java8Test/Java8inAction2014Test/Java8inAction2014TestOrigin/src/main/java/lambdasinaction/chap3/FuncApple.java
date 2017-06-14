package lambdasinaction.chap3;

import java.util.function.Function;

public class FuncApple {
    public static void main(String[] args) {
        Function<Integer,Apple> c2 = Apple::new;
        Apple a2 = c2.apply(100);
        System.out.println(a2);
    }
}
