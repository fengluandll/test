package c04;

import rx.Observable;

import java.math.BigDecimal;

import org.apache.commons.lang3.tuple.Pair;
import rx.Scheduler;

public class GroupByTest {

    public static void main(String[] args) {

        final Scheduler schedulerA = MyScheduler.getInstance().schedulerA;

        Observable<BigDecimal> totalPrice = Observable
                .just("bread", "butter", "egg", "milk",
                        "tomato", "cheese", "tomato", "egg", "egg")
                .groupBy(prod -> prod)
                .flatMap(grouped ->
                        grouped
                                .count()
                                .map(quantity -> {
                                    String productName = grouped.getKey();
                                    return Pair.of(productName, quantity);
                                }))
                .flatMap(order -> GroupByTest
                        .purchase(order.getKey(), order.getValue())
                        .subscribeOn(schedulerA))
                .reduce(BigDecimal::add)
                .single();
    }

    private static Observable<BigDecimal> purchase(String productName, Integer quantity) {
        return Observable.just(new BigDecimal(productName.length() * quantity));
    }

}
