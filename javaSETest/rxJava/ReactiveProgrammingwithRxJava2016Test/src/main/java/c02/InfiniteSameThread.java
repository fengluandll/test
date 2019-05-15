package c02;

import common.LogUtil;
import rx.Observable;

import java.math.BigInteger;

import static java.math.BigInteger.ONE;
import static java.math.BigInteger.ZERO;

public class InfiniteSameThread {
    public static void main(String[] args) {
        Observable<BigInteger> naturalNumbers =
                Observable.create(subscriber -> {
                    BigInteger i = ZERO;
                    while (true) {
                        subscriber.onNext(i);
                        i = i.add(ONE);
                    }
                });

        naturalNumbers.subscribe(x ->
                LogUtil.logWithThread(x));
    }
}
