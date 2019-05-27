package operators;

import io.reactivex.Observable;

import java.util.Arrays;

public class ConcatMapIterableTest {
    public static void main(String[] args) {
        Observable.just("A", "B", "C")
                .concatMapIterable(item ->
                        Arrays.asList(item, item, item))
                .subscribe(System.out::print);
    }
}
