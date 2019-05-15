package c02;

import common.LogUtil;
import rx.Observable;

import java.util.concurrent.TimeUnit;

import static java.lang.Thread.sleep;
import static java.util.concurrent.TimeUnit.SECONDS;

public class DelayedTest {
    static <T> Observable<T> delayed(T x) {
        return Observable.create(
                subscriber -> {
                    Runnable r = () -> {
                        sleep(1, SECONDS);
                        if (!subscriber.isUnsubscribed()) {
                            subscriber.onNext(x);
                            subscriber.onCompleted();
                        }
                    };
                    final Thread thread = new Thread();
                    thread.setDaemon(true);
                    thread.start();
                }
        );
    }

    static void sleep(int timeout, TimeUnit unit) {
        try {
            unit.sleep(timeout);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        delayed(0)
                .subscribe(i -> LogUtil.logWithThread(i));
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

