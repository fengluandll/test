package com.packtpub.reactive.my.c05;

import rx.Observable;

import java.util.concurrent.TimeUnit;

import static com.packtpub.reactive.common.Helpers.subscribePrint;

public class CombineLatestTest {
    public static void main(String[] args) {

        new CombineLatestTest().test();

    }

    private void test() {
        Observable<String> greetings = Observable
                .just("Hello", "Hi", "Howdy", "Zdravei", "Yo", "Good to see ya")
                .zipWith(
                        Observable.interval(1L, TimeUnit.SECONDS),
                        this::onlyFirstArg
                );

        Observable<String> names = Observable
                .just("Meddle", "Tanya", "Dali", "Joshua")
                .zipWith(
                        Observable.interval(1500L, TimeUnit.MILLISECONDS),
                        this::onlyFirstArg
                );

        Observable<String> punctuations = Observable.just(".", "?", "!", "!!!", "...")
                .zipWith(
                        Observable.interval(1100L, TimeUnit.MILLISECONDS),
                        this::onlyFirstArg
                );

        Observable<String> combined = Observable
                .combineLatest(
                        greetings, names, punctuations,
                        (greeting, name, punctuation) ->
                                greeting + " " + name + punctuation
                );

        subscribePrint(combined, "Sentences");
    }

    public <T, R> T onlyFirstArg(T arg1, R arg2) {
        return arg1;
    }
}
