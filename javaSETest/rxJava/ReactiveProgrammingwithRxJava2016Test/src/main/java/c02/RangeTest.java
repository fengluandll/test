package c02;

import common.LogUtil;
import rx.Observable;

public class RangeTest {
    public static void main(String[] args) {
        LogUtil.logWithThread("Before");
        Observable
                .range(5, 3)
                .subscribe(i -> LogUtil.logWithThread(i));
        LogUtil.logWithThread("After");
    }
}
