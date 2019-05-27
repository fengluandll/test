package c07;

import rx.Observable;

public class ErrorHello {
    public static void main(String[] args) {
        Observable
                .create(subscriber -> {
                    try {
                        subscriber.onNext(1 / 0);
                    } catch (Exception e) {
                        subscriber.onError(e);
                    }
                })
                .subscribe(System.out::println,
                        throwable -> System.out
                                .println(throwable.getMessage()));
    }
}

