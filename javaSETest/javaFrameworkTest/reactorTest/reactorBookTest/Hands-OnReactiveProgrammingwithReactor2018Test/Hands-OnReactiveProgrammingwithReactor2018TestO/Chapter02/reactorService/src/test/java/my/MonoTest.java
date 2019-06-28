package my;

import org.junit.Test;
import reactor.core.publisher.Mono;

import java.util.Arrays;

public class MonoTest {
    @Test
    public void testMono() {
        Mono.fromSupplier(() -> 1);
        Mono.fromCallable(() -> new String[]{"color"})
                .map(strings -> Arrays.asList(strings))
                .subscribe(t -> System.out.println("received " + t));
        Mono.fromRunnable(() -> System.out.println(" "))
                .subscribe(t -> System.out.println("received " + t),
                        null, () -> System.out.println("Finished"));
    }
}
