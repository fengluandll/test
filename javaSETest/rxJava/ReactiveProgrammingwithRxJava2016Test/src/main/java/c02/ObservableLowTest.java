package c02;

import common.LogUtil;
import rx.Observable;
import rx.Observable.OnSubscribe;
import rx.Subscriber;

public class ObservableLowTest {
    public static void main(String[] args) {
        Observable<Integer> ints = Observable
                .create(subscriber -> {
                    log("Create");
                    subscriber.onNext(5);
                    subscriber.onNext(6);
                    subscriber.onNext(7);
                    subscriber.onCompleted();
                    log("Completed");
                });

        log("Starting");
        ints.subscribe(i -> log("Element: " + i));
        log("Exit");
    }

    private static void log(Object msg) {
        LogUtil.logWithThread(msg);
    }
}
