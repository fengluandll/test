package c01;

import rx.Observable;

public class ObservableHello {
    public static void main(String[] args) {
        Observable.create(s -> {
            s.onNext("Hello");
            s.onCompleted();
        }).subscribe(hello -> System.out.println(hello));
    }
}
