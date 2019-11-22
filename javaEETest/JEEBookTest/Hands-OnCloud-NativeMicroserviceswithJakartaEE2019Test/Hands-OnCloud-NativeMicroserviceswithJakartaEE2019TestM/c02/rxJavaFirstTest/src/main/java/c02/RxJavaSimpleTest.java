package c02;

import io.reactivex.Flowable;
import io.reactivex.disposables.Disposable;

public class RxJavaSimpleTest {
    public static void main(String... args) {
        Disposable disposable = Flowable.just("Welcome on RxJava2 World")
                .subscribe(System.out::println);
        disposable.dispose();
    }
}
