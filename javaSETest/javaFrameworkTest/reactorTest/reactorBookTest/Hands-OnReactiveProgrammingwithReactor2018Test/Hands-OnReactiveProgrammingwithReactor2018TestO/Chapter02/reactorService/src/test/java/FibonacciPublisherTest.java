import org.junit.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

import java.util.concurrent.atomic.AtomicBoolean;

import static org.junit.Assert.*;

public class FibonacciPublisherTest {

    private Flux<Long> fibonacciGenerator = Flux.create(e -> {
        long current = 1, prev = 0;
        AtomicBoolean stop = new AtomicBoolean(false);
        e.onCancel(() -> {
            stop.set(true);
            System.out.println("******* Stop Received ****** ");
        });
        while (current > 0) {
            e.next(current);
            System.out.println("generated " + current);
            long next = current + prev;
            prev = current;
            current = next;
        }
        e.complete();

    }, FluxSink.OverflowStrategy.IGNORE);

    @Test
    public void test1() {
        fibonacciGenerator.subscribe();

        fibonacciGenerator.subscribe(t -> System.out.println("consuming " + t));

        fibonacciGenerator.subscribe(t -> System.out.println("consuming " + t),
                e -> e.printStackTrace() );

        fibonacciGenerator.subscribe(t -> System.out.println("consuming " + t),
                e -> e.printStackTrace(),
                ()-> System.out.println("Finished"));

        fibonacciGenerator.subscribe(t -> System.out.println("consuming " + t),
                e -> e.printStackTrace(),
                ()-> System.out.println("Finished"),
                s -> System.out.println("Subscribed :"+ s));
    }
}