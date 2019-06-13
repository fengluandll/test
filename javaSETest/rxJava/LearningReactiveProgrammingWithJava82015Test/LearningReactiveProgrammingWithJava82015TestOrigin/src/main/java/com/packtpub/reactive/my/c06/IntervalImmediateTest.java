package com.packtpub.reactive.my.c06;

import rx.Observable;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import static com.packtpub.reactive.common.Helpers.debug;

public class IntervalTest {
    public static void main(String[] args) throws InterruptedException {
        CountDownLatch countDownLatch = new CountDownLatch(1);
        Observable.interval(500L, TimeUnit.MILLISECONDS)
                .take(5)
                .doOnEach(debug("Default interval"))
                .finallyDo(() -> countDownLatch.countDown())
                .subscribe();
        countDownLatch.await();
    }
}
