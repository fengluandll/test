package operators;

import io.reactivex.Observable;

import java.io.IOException;

public class OnErrorResumeNextTest {
    public static void main(String[] args) {
        Observable<String> observable = Observable.fromCallable(() -> {
            if (Math.random() < 0.5) {
                throw new IOException();
            }
            throw new IllegalArgumentException();
        });

        Observable<String> result = observable.onErrorResumeNext(error -> {
            if (error instanceof IllegalArgumentException) {
                return Observable.empty();
            }
            return Observable.error(error);
        });

        for (int i = 0; i < 10; i++) {
            result.subscribe(
                    v -> System.out.println("This should never be printed!"),
                    error -> error.printStackTrace(),
                    () -> System.out.println("Done"));
        }
    }
}
