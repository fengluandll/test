package operators.errormgr;

import io.reactivex.Observable;

public class ErrorResumeNextTest {
    public static void main(String[] args) {
        Observable<Integer> numbers = Observable
                .generate(() -> 1, (state, emitter) -> {
                   emitter.onNext(state);
                   return state + 1;
                });

        numbers.scan(Math::multiplyExact)
                .onErrorResumeNext(Observable.empty())
                .subscribe(
                        System.out::println,
                        error -> System.err.println("onError " +
                                "should not be printed!"));
    }
}


