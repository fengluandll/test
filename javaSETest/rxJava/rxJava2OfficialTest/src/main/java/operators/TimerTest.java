package operators;

import io.reactivex.Observable;

import java.util.concurrent.TimeUnit;

public class TimerTest {
    public static void main(String[] args) {
        Observable<Long> eggTimer = Observable
                .timer(5, TimeUnit.MINUTES);

        eggTimer.blockingSubscribe(v ->
                System.out.println("Egg is ready!"));
    }
}


