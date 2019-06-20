package com.packtpub.reactive.chapter07;

import rx.Observable;

public class CountTest {
    public static void main(String[] args) {
        Observable.range(10,100)
                .count()
                .subscribe(System.out::println);
    }
}
