package c05;

import rx.Observable;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

public class TimedZip {
    public static void main(String[] args) {
        Observable<String> timedZip = Observable
                .zip(
                        Observable.from(Arrays.asList("Z", "I", "P", "P")),
                        Observable.interval(300L, TimeUnit.SECONDS),
                        (value, i) -> value
                );
        subscribePrint(timedZip, "Timed zip");
    }
}
