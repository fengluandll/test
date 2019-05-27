package operators;

import io.reactivex.Flowable;

public class GenerateTest {
    public static void main(String[] args) {
        int startValue = 1;
        int incrementValue = 1;

        Flowable<Integer> flowable = Flowable
                .generate(() -> startValue, (s, emitter) -> {
                    int nextValue = s + incrementValue;
                    emitter.onNext(nextValue);
                    return nextValue;
                });
        flowable.subscribe(value -> System.out.println(value));
    }
}
