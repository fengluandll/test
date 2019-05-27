package operators;

import io.reactivex.Observable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.concurrent.CompletableFuture;

public class FromPublisherTest {
    public static void main(String[] args) {
        Mono<Integer> reactorFlux = Mono
                .fromCompletionStage(CompletableFuture.completedFuture(1));
        Observable<Integer> observable = Observable
                .fromPublisher(reactorFlux);
        observable.subscribe(
                item -> System.out.println(item),
                error -> error.printStackTrace(),
                () -> System.out.println("Done"));
    }
}


