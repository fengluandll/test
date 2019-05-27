package operators;

import io.reactivex.Completable;
import io.reactivex.functions.Action;

public class FromActionTest {
    public static void main(String[] args) {
        Action action = () -> System.out.println("Hello, world");
        Completable completable = Completable.fromAction(action);
        completable.subscribe(() -> System.out.println("Done"),
                error -> error.printStackTrace());
    }
}
