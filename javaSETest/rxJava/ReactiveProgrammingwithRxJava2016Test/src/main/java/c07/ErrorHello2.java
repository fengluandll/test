package c07;

import rx.Observable;

public class ErrorHello2 {
    public static void main(String[] args) {
        Observable
                .fromCallable(() -> 1/0)
                .subscribe(System.out::println,
                        throwable -> System.out
                                .println(throwable.getMessage()));
    }
}

