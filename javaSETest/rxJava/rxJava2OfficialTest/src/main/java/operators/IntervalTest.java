package operators;

import io.reactivex.Observable;

import java.util.concurrent.TimeUnit;

public class IntervalTest {
    public static void main(String[] args) {
        Observable<Long> clock = Observable
                .interval(1, TimeUnit.SECONDS);

        clock.blockingSubscribe(time -> {
            if (time % 2 == 0) {
                System.out.println("Tick");
            } else {
                System.out.println("Tock");
            }
        });
    }
}
