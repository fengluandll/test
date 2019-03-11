package c02;

import common.LogUtil;
import rx.Observable;

public class CacheTest {
    public static void main(String[] args) {
        Observable<Integer> ints = Observable.<Integer>create(subscriber -> {
                    log("Create");
                    subscriber.onNext(42);
                    subscriber.onCompleted();
                }

        ).cache();
        log("Starting");
        ints.subscribe(i -> log("Element A: " + i));
        ints.subscribe(i -> log("Element B: " + i));
        log("Exit");
    }

    private static void log(Object msg) {
        LogUtil.logWithThread(msg);
    }
}
