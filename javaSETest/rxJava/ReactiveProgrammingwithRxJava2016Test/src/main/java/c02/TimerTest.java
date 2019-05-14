package c02;

import common.LogUtil;
import rx.Observable;

import java.util.concurrent.TimeUnit;

public class TimerTest {
    public static void main(String[] args) {
        Observable.timer(1, TimeUnit.SECONDS)
                .subscribe(aLong -> LogUtil.logWithThread(aLong));
    }
}
