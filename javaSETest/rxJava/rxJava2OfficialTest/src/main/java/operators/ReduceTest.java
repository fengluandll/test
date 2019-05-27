package operators;

import io.reactivex.Observable;

public class ReduceTest {
    public static void main(String[] args) {
        Observable.range(1, 5)
                .reduce((product, x) -> product * x)
                .subscribe(System.out::println);
    }
}
