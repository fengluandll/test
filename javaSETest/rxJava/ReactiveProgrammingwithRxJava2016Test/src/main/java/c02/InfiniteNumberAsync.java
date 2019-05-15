package c02;

import common.LogUtil;
import rx.Observable;
import rx.Subscription;

import java.math.BigInteger;

import static java.math.BigInteger.ONE;
import static java.math.BigInteger.ZERO;

public class InfiniteNumberAsync {
    public static void main(String[] args) throws InterruptedException {
        Observable<BigInteger> naturalNumbers =
                Observable.create(subscriber ->{
                    Runnable r = () -> {
                        BigInteger i = ZERO;
                        while (!subscriber.isUnsubscribed()) {
                            subscriber.onNext(i);
                            i = i.add(ONE);
                        }
                    };
                    new Thread(r).start();
                });

        Subscription subscription = naturalNumbers
                .subscribe(x -> LogUtil.logWithThread(x));
        Thread.sleep(1_000);
        subscription.unsubscribe();
        LogUtil.logWithThread("unsubscribe");
        Thread.sleep(2_000);
    }
}

