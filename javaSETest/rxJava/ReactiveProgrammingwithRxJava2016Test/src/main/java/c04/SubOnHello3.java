package c04;

import common.LogUtil;
import rx.Observable;
import rx.Scheduler;
import rx.schedulers.Schedulers;

public class SubOnHello3 {
    static Observable<String> simple() {
        return Observable.create(subscriber -> {
            LogUtil.logWithThread("Subscribed");
            subscriber.onNext("A");
            subscriber.onNext("B");
            subscriber.onCompleted();
        });
    }

    public static void main(String[] args) {

        final Scheduler schedulerA = MyScheduler.getInstance().schedulerA;
        final Scheduler schedulerB = MyScheduler.getInstance().schedulerB;

        log("Starting");
        final Observable<String> obs = simple();
        log("Created");

        obs.subscribeOn(schedulerA)
                .subscribeOn(schedulerB)
                .subscribe(
                        x -> log("Got " + x),
                        Throwable::printStackTrace,
                        () -> log("Completed")
                );

        log("Exiting");
    }

    static void log(String str) {
        LogUtil.logWithThread(str);
    }
}
