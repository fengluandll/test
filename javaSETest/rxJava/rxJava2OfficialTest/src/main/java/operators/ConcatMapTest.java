package operators;

import io.reactivex.Observable;

import java.util.concurrent.TimeUnit;

public class ConcatMapTest {
    public static void main(String[] args) {
        Observable.range(0, 5)
                .concatMap(i -> {
                    long delay = Math
                            .round(Math.random() * 10);

                    return Observable
                            .timer(delay, TimeUnit.SECONDS)
                            .map(n -> i);
                })
                .blockingSubscribe(System.out::print);
    }
}





