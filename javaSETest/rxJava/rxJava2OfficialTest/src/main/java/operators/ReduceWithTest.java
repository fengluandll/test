package operators;

import io.reactivex.Observable;

import java.util.TreeSet;

public class ReduceWithTest {
    public static void main(String[] args) {
        Observable.just(1, 2, 2, 3, 4, 4, 4, 5)
                .reduceWith(TreeSet::new, (set, x) -> {
                    set.add(x);
                    return set;
                }).subscribe(System.out::println);
    }
}
