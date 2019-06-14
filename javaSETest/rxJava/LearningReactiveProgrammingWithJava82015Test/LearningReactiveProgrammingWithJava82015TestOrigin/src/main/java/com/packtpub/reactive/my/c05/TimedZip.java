package com.packtpub.reactive.my.c05;

import rx.Observable;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import static com.packtpub.reactive.common.Helpers.subscribePrint;

public class TimedZip {
    public static void main(String[] args) {
        Observable<String> timedZip = Observable
                .zip(
                        Observable.from(Arrays.asList("Z", "I", "P", "P")),
                        Observable.interval(300L, TimeUnit.MILLISECONDS),
                        (value, i) -> value
                );
        subscribePrint(timedZip, "Timed zip");
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
