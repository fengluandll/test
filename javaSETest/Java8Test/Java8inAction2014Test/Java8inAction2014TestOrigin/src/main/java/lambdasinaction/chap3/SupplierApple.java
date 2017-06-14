package lambdasinaction.chap3;

import java.util.function.Supplier;

public class SupplierApple {
    public static void main(String[] args) {
        Supplier<Apple> c1 = Apple::new;
        Apple a1 = c1.get();
    }
}
