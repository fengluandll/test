package c02;

import common.LogUtil;
import rx.Observable;

import java.util.concurrent.TimeUnit;

public class IntervalTest {
    public static void main(String[] args) throws InterruptedException {
        Observable.interval(1_000_000 / 60, TimeUnit.MICROSECONDS)
                .subscribe(aLong -> LogUtil.logWithThread(aLong));
        Thread.sleep(5000);
    }
}
