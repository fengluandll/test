package com.packtpub.reactive.my.c06;

import rx.Observable;

import static com.packtpub.reactive.common.Helpers.debug;

public class DebugTest {
    public static void main(String[] args) {
        Observable.range(5, 5)
                .doOnEach(debug("Test", ""))
                .subscribe();
    }
}
