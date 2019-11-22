package c02;

import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Maybe;
import io.reactivex.Single;

public class RxJavaBaseClassesTest {
    public static void main(String[] args) {
        Single.just(1)
                .map(i -> i * 5)
                .map(Object::toString)
                .subscribe(System.out::println);

        Maybe.just("May be I will do something...")
                .subscribe(System.out::println);

        Maybe.never()
                .subscribe(o -> System.out.println("Something is here...never happened"));

        Completable
                .complete()
                .subscribe(() -> System.out.println("Completed"));

        Flowable.just("mauro", "luigi", "marco")
                .filter(s -> s.startsWith("m"))
                .map(String::toUpperCase)
                .subscribe(System.out::println);
    }
}
