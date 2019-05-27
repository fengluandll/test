package operators;


import io.reactivex.Maybe;
import io.reactivex.Observable;

public class FlatMapMaybeTest {
    public static void main(String[] args) {
        Observable.just(9.0, 16.0, -4.0)
                .flatMapMaybe( x -> {
                    if (x.compareTo(0.0) < 0) {
                        return Maybe.empty();
                    } else {
                        return Maybe.just(Math.sqrt(x));
                    }
                }).subscribe(
                System.out::println,
                Throwable::printStackTrace,
                () -> System.out.println("onComplete"));
    }
}


