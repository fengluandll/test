package operators.filtering;

import io.reactivex.Observable;
import io.reactivex.schedulers.Schedulers;

import java.util.concurrent.TimeUnit;

public class DebounceTest {
    public static void main(String[] args) {
        Observable<String> source = Observable.create(emitter -> {
            emitter.onNext("A");

            Thread.sleep(1_500);
            emitter.onNext("B");

            Thread.sleep(500);
            emitter.onNext("C");

            Thread.sleep(250);
            emitter.onNext("D");

            Thread.sleep(2_000);
            emitter.onNext("E");
            emitter.onComplete();
        });

        source.subscribeOn(Schedulers.io())
                .debounce(1, TimeUnit.SECONDS)
                .blockingSubscribe(
                        item -> System.out.println("onNext: " + item),
                        Throwable::printStackTrace,
                        () -> System.out.println("onComplete"));
    }
}
