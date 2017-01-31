package com.packtpub.reactive.chapter01.my;

import rx.Observable;
import rx.functions.Action1;

import java.util.Arrays;
import java.util.List;

/**
 * Created by YunZhang on 1/2/17.
 */
public class Observ {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("One","2","3","4","five");
        Observable<String> observable = Observable.from(list);
        observable.subscribe(new Action1<String>() {
            @Override
            public void call(String s) {
                System.out.println(s);
            }
        });

    }
}
