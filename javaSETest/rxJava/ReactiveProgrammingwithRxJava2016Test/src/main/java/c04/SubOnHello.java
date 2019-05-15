package c04;

import common.LogUtil;
import rx.Observable;

public class SubOnHello {
    static Observable<String> simple() {
        return Observable.create(subscriber -> {
            LogUtil.logWithThread("Subscribed");
            subscriber.onNext("A");
            subscriber.onNext("B");
            subscriber.onCompleted();
        });
    }

    public static void main(String[] args) {
        log("Starting");
        final Observable<String> obs = simple();
        log("Created");
        final Observable<String> obs2 = obs
                .map(x -> x)
                .filter(x -> true);
        log("Transformed");
        obs2.subscribe(
                x -> log("Got " + x),
                Throwable::printStackTrace,
                () -> log("Completed"));
    }

    static void log(String str) {
        LogUtil.logWithThread(str);
    }
}
