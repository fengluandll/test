package com.packtpub.reactive.chapter07;

import rx.Observable;

public class ToListTest {
    public static void main(String[] args) {
        Observable
                .range(5, 15)
                .toList()
                .subscribe(System.out::println);
    }
}
