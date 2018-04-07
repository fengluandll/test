package c02;

import java.util.function.Function;

public class IdenFunction {
    public static <V> Function<V,V> identityFunction() {
        return value -> value;
    }

    public static <V> Function<V, V> identityFunctionAIC() {
        return new Function<V, V>() {
            @Override
            public V apply(V value) {
                return value;
            }
        };
    }

    public static void main(String[] args) {
        Function<Number, Number> function = it -> it;
    }
}
