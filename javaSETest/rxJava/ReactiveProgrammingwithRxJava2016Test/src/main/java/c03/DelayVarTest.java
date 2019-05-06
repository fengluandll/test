package c03;

import rx.Observable;
import static rx.Observable.timer;

import java.util.concurrent.TimeUnit;

import static java.util.concurrent.TimeUnit.SECONDS;

public class DelayVarTest {
    public static void main(String[] args) throws InterruptedException {
        Observable.just("Lorem", "ipsum", "dolor", "sit",
                "amet", "consectetur", "adipiscing", "elit")
                .delay(word -> timer(word.length(), SECONDS))
                .subscribe(System.out::println);

        TimeUnit.SECONDS.sleep(15);
    }
}
