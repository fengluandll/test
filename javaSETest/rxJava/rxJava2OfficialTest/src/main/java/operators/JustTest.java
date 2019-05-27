package operators;

import io.reactivex.Observable;

public class JustTest {

    public static void main(String[] args) {
        String greeting = "Hello world!";
        Observable<String> observable = Observable
                .just(greeting);

        observable.subscribe(item ->
                System.out.println(item));
    }
}
