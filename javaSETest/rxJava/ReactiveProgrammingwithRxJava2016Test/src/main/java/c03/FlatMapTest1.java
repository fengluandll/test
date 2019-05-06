package c03;

import java.util.concurrent.TimeUnit;

import static java.util.concurrent.TimeUnit.SECONDS;
import static rx.Observable.just;

public class FlatMapTest1 {
    public static void main(String[] args) throws InterruptedException {
        just(10L, 1L)
                .flatMap(x -> just(x).delay(x, SECONDS))
                .subscribe(System.out::println);

        TimeUnit.SECONDS.sleep(15);
    }
}
