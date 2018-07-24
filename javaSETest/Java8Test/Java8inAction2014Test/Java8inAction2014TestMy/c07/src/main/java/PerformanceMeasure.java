import java.util.function.Function;
import java.util.stream.LongStream;

public class PerformanceMeasure {

    public static void main(String[] args) {
        long duration = PerformanceMeasure.measureSumPerf(PerformanceMeasure::parallelRangedSum, 10_000_000);
        System.out.println(duration);

    }

    public static long measureSumPerf(Function<Long, Long> adder, long n) {
        long fastest = Long.MAX_VALUE;
        for (int i = 0; i < 10; i++) {
            long start = System.nanoTime();
            long sum = adder.apply(n);
            long duration = (System.nanoTime() - start) / 1_000_000;
//            System.out.println("Result: " + sum);
            if (duration < fastest) {
                fastest = duration;
            }
        }
        return fastest;
    }

    public static long rangedSum(long n) {
        return LongStream.rangeClosed(1, n)
                .reduce(0L, Long::sum);
    }

    public static long parallelRangedSum(long n) {
        return LongStream.rangeClosed(1, n)
                .parallel()
                .reduce(0L, Long::sum);
    }
}
