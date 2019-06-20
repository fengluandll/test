package com.packtpub.reactive.chapter07;

import rx.Observable;

import java.util.Iterator;
import java.util.concurrent.TimeUnit;

public class LatestTest {
    public static void main(String[] args) {
        Iterable<Long> latest = Observable
                .interval(1000L, TimeUnit.MILLISECONDS)
                .toBlocking()
                .latest();
        Iterator iterator = latest.iterator();
        System.out.println(iterator.next());

        try {
            Thread.sleep(5500L);
        } catch (InterruptedException e) {}
        System.out.println(iterator.next());
        System.out.println(iterator.next());
    }
}


