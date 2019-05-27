package c07;

import rx.Observable;

public class MapError {
    public static void main(String[] args) {
        Observable.just(1, 0)
                .map(x -> 10 / x)
                .subscribe(System.out::println,
                        throwable -> System.out.println(throwable));
    }
}
