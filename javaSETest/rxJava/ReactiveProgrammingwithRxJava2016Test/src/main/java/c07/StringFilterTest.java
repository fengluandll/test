package c07;

import rx.Observable;

public class StringFilterTest {
    public static void main(String[] args) {
        Observable
                .just("Lorem", null, "ipsum")
                .filter(String::isEmpty);
    }
}
